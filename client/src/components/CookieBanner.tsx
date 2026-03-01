/**
 * GDPR Cookie Consent Banner
 * Displays on first visit to inform users about cookies and collect consent
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useConsent } from "@/hooks/use-consent";
import { Cookie, Settings } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Cookie consent banner component
 * Shows at bottom of screen until user makes a choice
 */
export default function CookieBanner() {
  const {
    showBanner,
    acceptAll,
    acceptNecessary,
    consent,
    updateConsent,
    hasConsent,
  } = useConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (!showBanner) return null;

  return (
    <>
      {/* Main Banner */}
      <div className='fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-sm border-t'>
        <Card className='max-w-7xl mx-auto p-4 sm:p-6'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
            {/* Icon */}
            <div className='flex-shrink-0'>
              <div className='p-2 bg-accent/10 rounded-full'>
                <Cookie className='h-6 w-6 text-accent' />
              </div>
            </div>

            {/* Content */}
            <div className='flex-1 space-y-2'>
              <h3 className='font-semibold text-lg'>
                Respect de votre vie privée
              </h3>
              <p className='text-sm text-muted-foreground'>
                Ce site utilise des cookies uniquement pour mémoriser vos
                préférences de consentement. Si vous acceptez, nous pourrons
                également utiliser des cookies analytiques pour améliorer
                l'expérience utilisateur.
              </p>
              <p className='text-xs text-muted-foreground'>
                En savoir plus dans notre{" "}
                <Link
                  to='/politique-de-confidentialite'
                  className='text-accent hover:underline'
                >
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>

            {/* Actions */}
            <div className='flex flex-col sm:flex-row gap-2 w-full sm:w-auto'>
              <Button
                variant='outline'
                onClick={() => setShowSettings(true)}
                className='gap-2'
              >
                <Settings className='h-4 w-4' />
                Personnaliser
              </Button>
              <Button
                variant='outline'
                onClick={acceptNecessary}
              >
                Nécessaires uniquement
              </Button>
              <Button onClick={acceptAll}>Tout accepter</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Dialog */}
      <Dialog
        open={showSettings}
        onOpenChange={setShowSettings}
      >
        <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              <Cookie className='h-5 w-5' />
              Paramètres des cookies
            </DialogTitle>
            <DialogDescription>
              Gérez vos préférences en matière de cookies. Les cookies
              nécessaires servent uniquement à mémoriser votre choix de
              consentement.
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-6 py-4'>
            {/* Necessary Cookies */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                  <Label className='text-base font-semibold'>
                    Cookies nécessaires
                  </Label>
                  <p className='text-sm text-muted-foreground'>
                    Uniquement pour mémoriser votre choix de cookies. Aucun
                    autre cookie nécessaire sur ce site vitrine.
                  </p>
                </div>
                <Switch
                  checked={true}
                  disabled
                />
              </div>
              <div className='pl-4 space-y-1 text-xs text-muted-foreground'>
                <p>• Préférences de consentement cookies</p>
                <p>• Aucune authentification requise</p>
                <p>• Aucun tracking sans votre accord</p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                  <Label className='text-base font-semibold'>
                    Cookies analytiques (optionnel)
                  </Label>
                  <p className='text-sm text-muted-foreground'>
                    Nous aident à comprendre quelles pages sont visitées pour
                    améliorer le site. Aucune donnée personnelle collectée.
                  </p>
                </div>
                <Switch
                  checked={hasConsent("analytics")}
                  onCheckedChange={(checked) =>
                    updateConsent("analytics", checked)
                  }
                />
              </div>
              <div className='pl-4 space-y-1 text-xs text-muted-foreground'>
                <p>• Google Analytics avec IP anonymisée</p>
                <p>• Pages visitées (anonyme)</p>
                <p>• Aucune identification personnelle</p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='space-y-1'>
                  <Label className='text-base font-semibold'>
                    Cookies marketing (non utilisés)
                  </Label>
                  <p className='text-sm text-muted-foreground'>
                    Actuellement, ce site vitrine n'utilise aucun cookie
                    marketing ou publicitaire.
                  </p>
                </div>
                <Switch
                  checked={hasConsent("marketing")}
                  onCheckedChange={(checked) =>
                    updateConsent("marketing", checked)
                  }
                  disabled
                />
              </div>
              <div className='pl-4 space-y-1 text-xs text-muted-foreground'>
                <p>• Aucune publicité sur ce site</p>
                <p>• Aucun remarketing</p>
                <p>• Aucun tracking publicitaire</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className='flex flex-col sm:flex-row gap-2 pt-4 border-t'>
            <Button
              variant='outline'
              onClick={() => {
                acceptNecessary();
                setShowSettings(false);
              }}
              className='flex-1'
            >
              Nécessaires uniquement
            </Button>
            <Button
              onClick={() => {
                acceptAll();
                setShowSettings(false);
              }}
              className='flex-1'
            >
              Tout accepter
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
