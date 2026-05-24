import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Abrarh Photographie",
  description:
    "Politique de confidentialité et protection des données personnelles d'Abrarh Photographie. Conformité RGPD.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title='Politique de Confidentialité'
        description='Protection de vos données personnelles'
      />

      <section className='py-16 sm:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='mb-8'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <Shield className='h-6 w-6 text-accent' />
                <CardTitle>Vos données sont protégées</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='text-muted-foreground'>
              <p>
                Abrarh Photographie accorde une grande importance à la
                protection de vos données personnelles. Cette politique de
                confidentialité vous informe sur la manière dont nous
                collectons, utilisons et protégeons vos informations
                conformément au Règlement Général sur la Protection des Données
                (RGPD).
              </p>
            </CardContent>
          </Card>

          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  1. Responsable du traitement
                </CardTitle>
              </CardHeader>
              <CardContent className='prose prose-sm max-w-none space-y-4 text-muted-foreground'>
                <p>
                  <strong>Identité :</strong> Abrarh Photographie
                  <br />
                  <strong>Photographe professionnelle :</strong> Abrar H.
                  <br />
                  <strong>Contact :</strong> abrar@photography.fr
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  2. Données collectées et finalités
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='font-semibold mb-2'>
                    2.1 Formulaire de contact
                  </h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    <strong>Finalité :</strong> Répondre à vos demandes de
                    renseignements, établir des devis et gérer la relation
                    client.
                  </p>
                </div>
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
