/**
 * Envoi du formulaire de contact.
 *
 * L'appel est relatif : il part vers la même origine que la page, donc il
 * fonctionne en production sans dépendre d'une URL externe. C'est la route
 * serveur /api/contact qui décide ensuite de la destination du message.
 *
 * Aucune donnée personnelle n'est journalisée côté navigateur.
 */

export interface ContactSubmissionData {
  nom: string;
  email: string;
  telephone?: string;
  service?: "Mariage" | "Couple" | "Famille" | "Maternité" | "Autre";
  date?: string;
  message: string;
}

export async function submitContactForm(
  data: ContactSubmissionData & { website?: string },
): Promise<{ success: boolean; message: string }> {
  let response: Response;

  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // Évite qu'un serveur injoignable laisse le bouton bloqué indéfiniment.
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new Error(
        "Le serveur met trop de temps à répondre. Réessayez dans un instant.",
      );
    }
    throw new Error(
      "Impossible de joindre le serveur. Vérifiez votre connexion.",
    );
  }

  const payload = await response
    .json()
    .catch(() => ({}) as { error?: string; message?: string });

  if (!response.ok) {
    throw new Error(
      payload.error || "Échec de l'envoi du formulaire. Veuillez réessayer.",
    );
  }

  return {
    success: true,
    message:
      payload.message ||
      "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
  };
}
