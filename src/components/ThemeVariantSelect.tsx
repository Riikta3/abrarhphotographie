"use client";

import { Check, Palette } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Sélecteur de variante de thème — prévisualisation client.
 *
 * Applique un attribut data-theme-variant sur <html>, qui redéfinit les
 * tokens de couleur déclarés dans globals.css. Le choix est mémorisé dans
 * localStorage sous la clé "theme-variant".
 *
 * ⚠️ Composant temporaire : une fois le thème arbitré, reporter les valeurs
 * retenues dans :root / .dark puis supprimer ce composant, le bloc
 * "VARIANTES DE THÈME" de globals.css et le script anti-flash du layout.
 */

export const THEME_VARIANTS = [
  { id: "actuel", label: "Actuel", hint: "Doré & bleu ardoise" },
  { id: "nb-photos", label: "N&B — photos couleur", hint: "Interface désaturée" },
  { id: "nb-total", label: "N&B intégral", hint: "Photos désaturées aussi" },
  { id: "nb-chaud", label: "N&B chaud", hint: "Gris argentique" },
  { id: "nb-clair", label: "N&B clair", hint: "Fond blanc, galerie" },
] as const;

export type ThemeVariantId = (typeof THEME_VARIANTS)[number]["id"];

export const THEME_VARIANT_KEY = "theme-variant";

/** Lecture de localStorage tolérante aux navigateurs qui le bloquent. */
export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Écriture de localStorage tolérante aux navigateurs qui le bloquent. */
export function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Navigation privée ou stockage refusé : le choix reste actif pour la session.
  }
}

export function applyThemeVariant(variant: string) {
  const root = document.documentElement;

  if (variant === "actuel") {
    root.removeAttribute("data-theme-variant");

    // Retour au thème d'origine : on rend la main au réglage clair/sombre
    // de l'utilisateur, sinon il resterait bloqué dans le mode imposé par
    // la dernière variante essayée.
    if (readStorage("theme") === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    return;
  }

  root.setAttribute("data-theme-variant", variant);

  // La variante "nb-clair" est un thème clair : on retire .dark pour que
  // les composants qui testent la classe restent cohérents.
  if (variant === "nb-clair") {
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
  }
}

export default function ThemeVariantSelect() {
  const [variant, setVariant] = useState<string>("actuel");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readStorage(THEME_VARIANT_KEY);
    if (saved && THEME_VARIANTS.some((v) => v.id === saved)) {
      setVariant(saved);
      // On réapplique au montage : si le script anti-flash du layout n'a pas
      // pu s'exécuter, le DOM serait sinon désynchronisé du menu affiché.
      applyThemeVariant(saved);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-theme-variant-menu]")) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const choose = (id: string) => {
    setVariant(id);
    applyThemeVariant(id);
    writeStorage(THEME_VARIANT_KEY, id);
    setOpen(false);
  };

  const current = THEME_VARIANTS.find((v) => v.id === variant) ?? THEME_VARIANTS[0];

  return (
    <div className='relative' data-theme-variant-menu>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label='Choisir le thème du site'
        data-testid='theme-variant-trigger'
        className='inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
      >
        <Palette className='h-4 w-4' aria-hidden='true' />
        <span className='hidden lg:inline'>{current.label}</span>
        <span className='lg:hidden'>Thème</span>
      </button>

      {open && (
        <div
          role='listbox'
          aria-label='Thèmes disponibles'
          className='absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-md border border-popover-border bg-popover shadow-lg'
        >
          <p className='border-b border-popover-border px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground'>
            Prévisualisation du thème
          </p>
          {THEME_VARIANTS.map((v) => {
            const selected = v.id === variant;
            return (
              <button
                key={v.id}
                type='button'
                role='option'
                aria-selected={selected}
                onClick={() => choose(v.id)}
                data-testid={`theme-variant-${v.id}`}
                className='flex w-full items-start gap-2 px-3 py-2 text-left transition-colors hover-elevate'
              >
                <Check
                  className={`mt-0.5 h-4 w-4 flex-none text-accent ${selected ? "opacity-100" : "opacity-0"}`}
                  aria-hidden='true'
                />
                <span className='min-w-0'>
                  <span className='block text-sm font-medium text-popover-foreground'>{v.label}</span>
                  <span className='block text-xs text-muted-foreground'>{v.hint}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
