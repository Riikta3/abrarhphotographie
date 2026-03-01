/**
 * Legal Notice Page (Mentions Légales)
 * Legal information about the website owner and hosting
 */

import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

/**
 * Legal Notice page component
 */
export default function LegalNoticePage() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Abrarh Photographie</title>
        <meta
          name='description'
          content="Mentions légales du site Abrarh Photographie. Informations sur l'éditeur, l'hébergeur et les droits d'auteur."
        />
        <meta
          name='robots'
          content='noindex, follow'
        />
      </Helmet>

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
            {/* Section 1: Éditeur */}
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

            {/* Section 2: Hébergement */}
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
                      <strong>Nom :</strong> [Nom de votre hébergeur - ex:
                      Netlify, Vercel, OVH]
                    </p>
                    <p>
                      <strong>Adresse :</strong> [Adresse de l'hébergeur]
                    </p>
                    <p>
                      <strong>Site web :</strong> [URL de l'hébergeur]
                    </p>
                  </div>
                </div>
                <div className='mt-4'>
                  <h3 className='font-semibold text-sm mb-2'>
                    Hébergeur de la base de données
                  </h3>
                  <div className='space-y-2 text-sm text-muted-foreground'>
                    <p>
                      <strong>Nom :</strong> [Nom de votre hébergeur backend -
                      ex: Heroku, Railway, OVH]
                    </p>
                    <p>
                      <strong>Localisation :</strong> France / Union Européenne
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Propriété intellectuelle */}
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

                <div className='bg-accent/10 p-4 rounded-lg'>
                  <p className='text-sm font-semibold mb-2'>
                    Utilisation interdite
                  </p>
                  <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1'>
                    <li>Reproduction sans autorisation</li>
                    <li>Utilisation commerciale</li>
                    <li>Modification ou retouche</li>
                    <li>Publication sur d'autres sites ou réseaux sociaux</li>
                    <li>Téléchargement et redistribution</li>
                  </ul>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Droit à l'image
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Les personnes photographiées ont donné leur autorisation
                    écrite pour la publication de leurs images sur ce site.
                    Conformément à la loi, toute personne peut demander le
                    retrait de son image en contactant directement Abrarh
                    Photographie.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Crédits */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>4. Crédits</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-3 text-sm'>
                  <p>
                    <strong>Conception et développement :</strong> [Votre nom /
                    Agence]
                  </p>
                  <p>
                    <strong>Photographies :</strong> © Abrarh Photographie -
                    Tous droits réservés
                  </p>
                  <p>
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className='text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                    <li>React.js & TypeScript</li>
                    <li>Strapi CMS</li>
                    <li>TailwindCSS</li>
                    <li>Vite</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>5. Cookies</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Ce site utilise des cookies pour améliorer l'expérience
                  utilisateur et analyser le trafic. Conformément à la
                  législation en vigueur, nous vous informons de l'utilisation
                  de ces cookies et vous donnons la possibilité de les refuser.
                </p>
                <p className='text-sm text-muted-foreground'>
                  Pour plus d'informations, consultez notre{" "}
                  <a
                    href='/politique-de-confidentialite'
                    className='text-accent hover:underline'
                  >
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Section 6: Protection des données */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  6. Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Les données personnelles collectées via le formulaire de
                  contact sont traitées conformément au Règlement Général sur la
                  Protection des Données (RGPD).
                </p>
                <p className='text-sm text-muted-foreground'>
                  Vous disposez d'un droit d'accès, de rectification, de
                  suppression et d'opposition concernant vos données
                  personnelles.
                </p>
                <p className='text-sm text-muted-foreground'>
                  Pour plus d'informations, consultez notre{" "}
                  <a
                    href='/politique-de-confidentialite'
                    className='text-accent hover:underline'
                  >
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Section 7: Responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>7. Responsabilité</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Contenu du site
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Abrarh Photographie s'efforce de fournir des informations
                    aussi précises que possible. Toutefois, elle ne pourra être
                    tenue responsable des omissions, des inexactitudes et des
                    carences dans la mise à jour.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Liens hypertextes
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Les liens hypertextes mis en place vers d'autres sites
                    (notamment Instagram) n'engagent pas la responsabilité
                    d'Abrarh Photographie quant au contenu de ces sites.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    Disponibilité du site
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Abrarh Photographie s'efforce de maintenir accessible le
                    site 24h/24 et 7j/7, mais n'est tenue à aucune obligation
                    d'y parvenir. Le site peut être interrompu pour maintenance,
                    mises à jour ou pour toute autre raison technique.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Loi applicable */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  8. Loi applicable et juridiction
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Les présentes mentions légales sont régies par le droit
                  français. En cas de litige et à défaut d'accord amiable, le
                  litige sera porté devant les tribunaux français conformément
                  aux règles de compétence en vigueur.
                </p>
              </CardContent>
            </Card>

            {/* Section 9: Contact */}
            <Card className='bg-accent/5'>
              <CardHeader>
                <CardTitle className='text-xl'>9. Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  Pour toute question concernant les mentions légales ou
                  l'utilisation du site :
                </p>
                <div className='space-y-2 text-sm'>
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
                    <strong>Instagram :</strong>{" "}
                    <a
                      href='https://instagram.com/abrar.hphotographie'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-accent hover:underline'
                    >
                      @abrar.hphotographie
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Date de MAJ */}
            <div className='text-center text-sm text-muted-foreground pt-4'>
              <p>Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
