import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Route de réception du formulaire de contact.
 *
 * Le navigateur poste ici (même origine), jamais directement vers Strapi :
 * les secrets et l'URL du CMS restent côté serveur.
 *
 * Journalisation : on ne logge JAMAIS le contenu du message ni les
 * coordonnées du visiteur (RGPD). Seuls des compteurs anonymes sont tracés.
 */

const MAX_BODY_BYTES = 32 * 1024;

const contactSchema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Format d'email invalide").max(254),
  telephone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Type de séance requis").max(60),
  date: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message trop court").max(5000),
  // Champ piège : invisible pour un humain, rempli par les robots.
  website: z.string().max(200).optional(),
});

/**
 * Limitation de débit en mémoire : suffisante pour un site vitrine sur une
 * instance unique. Pour du multi-instance, remplacer par un store partagé
 * (Upstash, Vercel KV).
 */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  recent.push(now);
  hits.set(ip, recent);

  // Purge opportuniste pour éviter que la Map ne grossisse indéfiniment.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "inconnue";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "Trop de demandes envoyées. Merci de patienter quelques minutes avant de réessayer.",
      },
      { status: 429 },
    );
  }

  const raw = await req.text();

  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message trop volumineux." }, { status: 413 });
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(parsedJson);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Données invalides." },
      { status: 400 },
    );
  }

  const { website, ...submission } = parsed.data;

  // Honeypot rempli : c'est un robot. On répond comme si tout s'était bien
  // passé pour ne pas lui indiquer qu'il a été filtré, mais on ne traite rien.
  if (website && website.trim() !== "") {
    return NextResponse.json({
      success: true,
      message:
        "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
    });
  }

  const strapiUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;

  // Sans CMS configuré, on ne prétend pas avoir transmis la demande :
  // le visiteur doit savoir qu'il faut passer par un autre canal.
  if (!strapiUrl) {
    console.error(
      "[contact] STRAPI_URL absent : la demande n'a pas pu être transmise.",
    );
    return NextResponse.json(
      {
        error:
          "Le formulaire est momentanément indisponible. Écrivez-nous directement par email, nous vous répondrons rapidement.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(`${strapiUrl}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.STRAPI_TOKEN
          ? { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({ data: submission }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      // Statut uniquement : le corps peut contenir les données du visiteur.
      console.error(`[contact] Strapi a répondu ${response.status}`);
      return NextResponse.json(
        {
          error:
            "Votre demande n'a pas pu être enregistrée. Réessayez ou contactez-nous par email.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
    });
  } catch (error) {
    const reason =
      error instanceof DOMException && error.name === "TimeoutError"
        ? "timeout"
        : "réseau";
    console.error(`[contact] Transmission impossible (${reason}).`);

    return NextResponse.json(
      {
        error:
          "Votre demande n'a pas pu être enregistrée. Réessayez ou contactez-nous par email.",
      },
      { status: 502 },
    );
  }
}
