import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Abrarh Photographie",
  description:
    "Mentions légales du site Abrarh Photographie. Informations sur l'éditeur, l'hébergeur et les droits d'auteur.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHeader
        title='Mentions Légales'
        description='Informations légales sur le site'
      />

      <section className='py-16 sm:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='mb-8'>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <FileText className='h-6 w-6 text-accent' />
                <CardTitle>Informations légales</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='text-muted-foreground'>
              <p>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l'économie numérique, il est précisé
                aux utilisateurs du site Abrarh Photographie l'identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>
            </CardContent>
          </Card>

          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>1. Éditeur du site</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2 text-sm'>
                  <p>
                    <strong>Nom commercial :</strong> Abrarh Photographie
                  </p>
                  <p>
                    <strong>Photographe professionnelle :</strong> Abrar H.
                  </p>
                  <p>
                    <strong>Statut :</strong> Auto-entrepreneur /
                    Micro-entreprise
                  </p>
                  <p>
                    <strong>Zone d'activité :</strong> Seine-et-Marne (77) et
                    Île-de-France
                  </p>
                  <p>
                    <strong>Spécialités :</strong> Photographie de mariage,
                    couple, famille et maternité
                  </p>
                  <p>
                    <strong>Email :</strong>{" "}
                    <a
                      href='mailto:abrar@photography.fr'
                      className='text-accent hover:underline'
                    >
                      abrar@photography.fr
                    </a>
                  </p>
                  <p>
                    <strong>Site web :</strong>{" "}
                    <a
                      href='https://abrarh-photographie.com'
                      className='text-accent hover:underline'
                    >
                      abrarh-photographie.com
                    </a>
                  </p>
                </div>
                <div className='bg-muted p-4 rounded-lg mt-4'>
                  <p className='text-sm text-muted-foreground'>
                    <strong>Directrice de la publication :</strong> Abrar H.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>2. Hébergement</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Hébergeur du site web
                  </h3>
                  <div className='space-y-2 text-sm text-muted-foreground'>
                    <p>
                      <strong>Nom :</strong> Vercel
                    </p>
                    <p>
                      <strong>Site web :</strong> https://vercel.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  3. Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Droits d'auteur et droits voisins
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    L'ensemble de ce site (structure, textes, photographies,
                    logos, graphismes, vidéos, sons) relève de la législation
                    française et internationale sur le droit d'auteur et la
                    propriété intellectuelle.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>Photographies</h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Toutes les photographies présentes sur ce site sont la
                    propriété exclusive d'Abrarh Photographie et sont protégées
                    par le droit d'auteur.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    <strong>
                      Toute reproduction, représentation, modification,
                      publication ou adaptation est strictement interdite sans
                      l'autorisation écrite préalable d'Abrarh Photographie.
                    </strong>
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
