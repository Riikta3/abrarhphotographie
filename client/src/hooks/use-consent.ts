/**
 * Hook for managing GDPR consent preferences
 * Handles cookie consent, localStorage management, and consent state
 */

import { useEffect, useState } from "react";

export type ConsentType = "necessary" | "analytics" | "marketing";

export interface ConsentPreferences {
  necessary: boolean; // Always true - required for site functionality
  analytics: boolean; // Google Analytics, etc.
  marketing: boolean; // Marketing cookies, remarketing
  timestamp: number;
}

const CONSENT_KEY = "gdpr-consent";
const BANNER_DISMISSED_KEY = "gdpr-banner-dismissed";

/**
 * Default consent preferences
 */
const defaultConsent: ConsentPreferences = {
  necessary: true, // Always enabled
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
};

/**
 * Hook to manage GDPR consent
 * @returns Consent management functions and state
 */
export function useConsent() {
  const [consent, setConsentState] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Load consent from localStorage on mount
   */
  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(CONSENT_KEY);
      const bannerDismissed = localStorage.getItem(BANNER_DISMISSED_KEY);

      if (savedConsent) {
        setConsentState(JSON.parse(savedConsent));
        setShowBanner(false);
      } else if (!bannerDismissed) {
        // Show banner if no consent saved and not dismissed
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Error loading consent preferences:", error);
      setShowBanner(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Save consent preferences
   * @param preferences - Consent preferences to save
   */
  const saveConsent = (preferences: Partial<ConsentPreferences>) => {
    const newConsent: ConsentPreferences = {
      ...defaultConsent,
      ...preferences,
      necessary: true, // Always true
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
      setConsentState(newConsent);
      setShowBanner(false);

      // Trigger analytics if enabled
      if (newConsent.analytics) {
        enableAnalytics();
      } else {
        disableAnalytics();
      }

      // Trigger marketing if enabled
      if (newConsent.marketing) {
        enableMarketing();
      } else {
        disableMarketing();
      }
    } catch (error) {
      console.error("Error saving consent preferences:", error);
    }
  };

  /**
   * Accept all cookies
   */
  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
    });
  };

  /**
   * Accept only necessary cookies
   */
  const acceptNecessary = () => {
    saveConsent({
      analytics: false,
      marketing: false,
    });
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
  };

  /**
   * Reject all optional cookies
   */
  const rejectAll = () => {
    acceptNecessary();
  };

  /**
   * Update specific consent preference
   * @param type - Type of consent to update
   * @param value - New value
   */
  const updateConsent = (type: ConsentType, value: boolean) => {
    if (type === "necessary") return; // Can't change necessary cookies

    saveConsent({
      ...consent,
      [type]: value,
    });
  };

  /**
   * Reset all consent and show banner again
   */
  const resetConsent = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(BANNER_DISMISSED_KEY);
      setConsentState(null);
      setShowBanner(true);
      disableAnalytics();
      disableMarketing();
    } catch (error) {
      console.error("Error resetting consent:", error);
    }
  };

  /**
   * Check if user has given consent for a specific type
   * @param type - Type of consent to check
   * @returns True if consent given
   */
  const hasConsent = (type: ConsentType): boolean => {
    if (type === "necessary") return true;
    return consent?.[type] ?? false;
  };

  return {
    consent,
    showBanner,
    isLoading,
    acceptAll,
    acceptNecessary,
    rejectAll,
    updateConsent,
    resetConsent,
    hasConsent,
    setShowBanner,
  };
}

/**
 * Enable Google Analytics
 */
function enableAnalytics() {
  // Initialize Google Analytics if you have it
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "granted",
    });
  }
}

/**
 * Disable Google Analytics
 */
function disableAnalytics() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }
}

/**
 * Enable marketing cookies
 */
function enableMarketing() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }
}

/**
 * Disable marketing cookies
 */
function disableMarketing() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}
