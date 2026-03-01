import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Abrarh Photographie",
  description:
    "Conditions générales d'utilisation du site Abrarh Photographie. Règles d'utilisation et mentions légales.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Conditions Générales d'Utilisation"
        subtitle="Règles d'utilisation du site"
      />

      <section className='py-16 sm:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='mb-8'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <Scale className='h-6 w-6 text-accent' />
                <CardTitle>Conditions d'utilisation du site</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='text-muted-foreground'>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU)
                définissent les règles d'accès et d'utilisation du site Abrarh
                Photographie. En accédant à ce site, vous acceptez sans réserve
                les présentes CGU.
              </p>
            </CardContent>
          </Card>

          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>1. Objet du site</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Le site abrarh-photographie.com est un site vitrine présentant
                  les services de photographie professionnelle proposés par
                  Abrar H.
                </p>
              </CardContent>
            </Card>

            <div className='text-center text-sm text-muted-foreground pt-4'>
              <p>Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
