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
export async function submitContactForm(
  data: ContactSubmissionData
): Promise<{ success: boolean; message: string }> {
  try {
    console.log(
      "Submitting contact form to:",
      `${API_URL}/contact-submissions`
    );
    console.log("Form data:", data);

    const response = await fetch(`${API_URL}/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({
          error: { message: `HTTP ${response.status}: ${response.statusText}` },
        }));
      console.error("Error response:", error);

      // More detailed error messages based on status code
      if (response.status === 403) {
        throw new Error(
          "Accès refusé. Veuillez réessayer ou nous contacter directement."
        );
      } else if (response.status === 400) {
        throw new Error(
          error.error?.message || "Données invalides. Vérifiez votre saisie."
        );
      } else if (response.status === 500) {
        throw new Error("Erreur serveur. Veuillez réessayer plus tard.");
      }

      throw new Error(error.error?.message || "Échec de l'envoi du formulaire");
    }

    const result = await response.json();
    console.log("Success response:", result);

    return {
      success: true,
      message:
        "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}
