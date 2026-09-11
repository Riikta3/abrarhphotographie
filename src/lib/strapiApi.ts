/**
 * Strapi API Service
 * Handles all API calls to the Strapi backend
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const API_URL = `${STRAPI_URL}/api`;

/**
 * Photo interface matching Strapi schema
 */
export interface StrapiPhoto {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  caption?: string;
  description?: string;
  alt: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  focusKeyword?: string;
  image: {
    id: number;
    url: string;
    alternativeText?: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  thumbnail?: {
    id: number;
    url: string;
  };
  category: "Mariages" | "Couples" | "Familles" | "Maternité";
  page?: ("gallery" | "home-carousel" | "services" | "about")[];
  location?: string;
  venue?: string;
  order: number;
  featured: boolean;
  shootDate?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Strapi API response wrapper
 */
interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Contact submission data interface
 */
export interface ContactSubmissionData {
  nom: string;
  email: string;
  telephone?: string;
  service?: "Mariage" | "Couple" | "Famille" | "Maternité" | "Autre";
  date?: string;
  message: string;
}

/**
 * Fetch photos from Strapi with optional filters
 * @param category - Filter by category
 * @param page - Filter by page location
 * @param featured - Filter featured photos only
 * @returns Array of photos
 */
export async function fetchPhotos(
  category?: string,
  page?: string,
  featured?: boolean
): Promise<StrapiPhoto[]> {
  try {
    const params = new URLSearchParams({
      populate: "*",
      sort: "order:asc",
      "pagination[pageSize]": "100",
    });

    // Add filters
    if (category && category !== "Tous") {
      params.append("filters[category][$eq]", category);
    }

    if (page) {
      params.append("filters[page][$contains]", page);
    }

    if (featured) {
      params.append("filters[featured][$eq]", "true");
    }

    const response = await fetch(`${API_URL}/photos?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.statusText}`);
    }

    const result: StrapiResponse<StrapiPhoto[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching photos from Strapi:", error);
    throw error;
  }
}

/**
 * Get full image URL from Strapi
 * @param photo - Strapi photo object
 * @returns Full URL to the image
 */
export function getImageUrl(photo: StrapiPhoto): string {
  const imageUrl = photo.image?.url;
  if (!imageUrl) return "";

  // If URL is relative, prepend Strapi URL
  if (imageUrl.startsWith("/")) {
    return `${STRAPI_URL}${imageUrl}`;
  }

  return imageUrl;
}

/**
 * Get thumbnail URL from Strapi
 * @param photo - Strapi photo object
 * @returns Full URL to the thumbnail or original image
 */
export function getThumbnailUrl(photo: StrapiPhoto): string {
  // Try custom thumbnail first
  if (photo.thumbnail?.url) {
    const url = photo.thumbnail.url;
    return url.startsWith("/") ? `${STRAPI_URL}${url}` : url;
  }

  // Try image formats
  const formats = photo.image?.formats;
  if (formats) {
    const thumbnailUrl = formats.small?.url || formats.thumbnail?.url;
    if (thumbnailUrl) {
      return thumbnailUrl.startsWith("/")
        ? `${STRAPI_URL}${thumbnailUrl}`
        : thumbnailUrl;
    }
  }

  // Fallback to original image
  return getImageUrl(photo);
}

/**
 * Submit contact form to Strapi
 * @param data - Contact form data
 * @returns Success response
 */
/**
 * Envoie le formulaire de contact vers la route API interne (/api/contact).
 *
 * L'appel est volontairement relatif : il part vers la même origine que la page,
 * donc il fonctionne en production sans dépendre d'une URL publique. C'est la
 * route serveur qui relaie ensuite vers Strapi et/ou envoie l'email, avec ses
 * propres secrets — jamais exposés au navigateur.
 *
 * Aucune donnée personnelle n'est journalisée côté client.
 */
export async function submitContactForm(
  data: ContactSubmissionData & { website?: string }
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
        "Le serveur met trop de temps à répondre. Réessayez dans un instant."
      );
    }
    throw new Error(
      "Impossible de joindre le serveur. Vérifiez votre connexion."
    );
  }

  const payload = await response
    .json()
    .catch(() => ({}) as { error?: string; message?: string });

  if (!response.ok) {
    throw new Error(
      payload.error || "Échec de l'envoi du formulaire. Veuillez réessayer."
    );
  }

  return {
    success: true,
    message:
      payload.message ||
      "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
  };
}
