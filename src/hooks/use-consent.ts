"use client";

import { useEffect, useState } from "react";

export type ConsentType = "necessary" | "analytics" | "marketing";

export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const CONSENT_KEY = "gdpr-consent";
const BANNER_DISMISSED_KEY = "gdpr-banner-dismissed";

const defaultConsent: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
};

export function useConsent() {
  const [consent, setConsentState] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(CONSENT_KEY);
      const bannerDismissed = localStorage.getItem(BANNER_DISMISSED_KEY);

      if (savedConsent) {
        setConsentState(JSON.parse(savedConsent));
        setShowBanner(false);
      } else if (!bannerDismissed) {
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Error loading consent preferences:", error);
      setShowBanner(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveConsent = (preferences: Partial<ConsentPreferences>) => {
    const newConsent: ConsentPreferences = {
      ...defaultConsent,
      ...preferences,
      necessary: true,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
      setConsentState(newConsent);
      setShowBanner(false);

      if (newConsent.analytics) {
        enableAnalytics();
      } else {
        disableAnalytics();
      }

      if (newConsent.marketing) {
        enableMarketing();
      } else {
        disableMarketing();
      }
    } catch (error) {
      console.error("Error saving consent preferences:", error);
    }
  };

  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      analytics: false,
      marketing: false,
    });
    localStorage.setItem(BANNER_DISMISSED_KEY, "true");
  };

  const rejectAll = () => {
    acceptNecessary();
  };

  const updateConsent = (type: ConsentType, value: boolean) => {
    if (type === "necessary") return;

    saveConsent({
      ...consent,
      [type]: value,
    } as Partial<ConsentPreferences>);
  };

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

type GtagFn = (
  command: "consent" | "config" | "event" | "js",
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  ...args: any[]
) => void;

function enableAnalytics() {
  if (typeof window !== "undefined") {
    const gtag = (window as unknown as { gtag: GtagFn }).gtag;
    if (gtag) {
      gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }
}

function disableAnalytics() {
  if (typeof window !== "undefined") {
    const gtag = (window as unknown as { gtag: GtagFn }).gtag;
    if (gtag) {
      gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }
}

function enableMarketing() {
  if (typeof window !== "undefined") {
    const gtag = (window as unknown as { gtag: GtagFn }).gtag;
    if (gtag) {
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  }
}

function disableMarketing() {
  if (typeof window !== "undefined") {
    const gtag = (window as unknown as { gtag: GtagFn }).gtag;
    if (gtag) {
      gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }
}
