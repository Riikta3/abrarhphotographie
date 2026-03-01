/**
 * Terms of Service Page (Conditions Générales d'Utilisation)
 * Terms and conditions for using the website
 */

import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";

/**
 * Terms of Service page component
 */
export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Conditions Générales d'Utilisation | Abrarh Photographie</title>
        <meta
          name='description'
          content="Conditions générales d'utilisation du site Abrarh Photographie. Règles d'utilisation et mentions légales."
        />
        <meta
          name='robots'
          content='noindex, follow'
        />
      </Helmet>

      <PageHeader
        title="Conditions Générales d'Utilisation"
        description="Règles d'utilisation du site"
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
            {/* Section 1 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>1. Objet du site</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Le site abrarh-photographie.com est un site vitrine présentant
                  les services de photographie professionnelle proposés par
                  Abrar H., photographe spécialisée dans :
                </p>
                <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                  <li>Photographie de mariage</li>
                  <li>Séances photo de couple</li>
                  <li>Portraits de famille</li>
                  <li>Séances maternité</li>
                </ul>
                <p className='text-sm text-muted-foreground mt-4'>
                  <strong>Zone d'intervention :</strong> Seine-et-Marne (77) et
                  Île-de-France
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  2. Acceptation des conditions
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  L'utilisation du site abrarh-photographie.com implique
                  l'acceptation pleine et entière des présentes Conditions
                  Générales d'Utilisation.
                </p>
                <p className='text-sm text-muted-foreground'>
                  Si vous n'acceptez pas ces conditions, vous devez vous
                  abstenir d'utiliser ce site.
                </p>
                <div className='bg-accent/10 p-4 rounded-lg'>
                  <p className='text-sm font-semibold mb-2'>
                    Modifications des CGU
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Abrarh Photographie se réserve le droit de modifier à tout
                    moment les présentes CGU. Les modifications entrent en
                    vigueur dès leur publication sur le site. Il est donc
                    conseillé de consulter régulièrement cette page.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  3. Accès au site et services
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    3.1 Accès gratuit
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    L'accès au site et la consultation de son contenu sont
                    gratuits et ne nécessitent pas d'inscription, sauf mention
                    contraire.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    3.2 Disponibilité
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Nous nous efforçons de maintenir le site accessible 24h/24
                    et 7j/7. Toutefois, l'accès peut être temporairement
                    interrompu pour des raisons de maintenance, de mises à jour
                    ou pour toute autre raison technique, sans préavis.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    3.3 Matériel et connexion
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    L'utilisateur est responsable de son matériel informatique
                    et de sa connexion internet. Abrarh Photographie ne peut
                    être tenu responsable de tout dommage direct ou indirect qui
                    pourrait survenir en raison d'une défaillance de ces
                    équipements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  4. Utilisation du site
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    4.1 Utilisation conforme
                  </h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Vous vous engagez à utiliser le site de manière conforme à
                    la loi et aux présentes CGU. Il est notamment interdit de :
                  </p>
                  <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                    <li>
                      Utiliser le site à des fins illégales ou frauduleuses
                    </li>
                    <li>
                      Tenter d'accéder de manière non autorisée au site ou aux
                      systèmes informatiques
                    </li>
                    <li>
                      Envoyer des virus, malwares ou tout code malveillant
                    </li>
                    <li>
                      Collecter des données personnelles d'autres utilisateurs
                    </li>
                    <li>Spammer le formulaire de contact</li>
                    <li>
                      Contourner les mesures de sécurité du site (rate limiting,
                      CAPTCHA, etc.)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    4.2 Formulaire de contact
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Le formulaire de contact est destiné uniquement aux demandes
                    de renseignements et de devis concernant les prestations
                    photographiques. Toute utilisation abusive (spam, publicité,
                    harcèlement) est strictement interdite et pourra entraîner
                    des poursuites.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  5. Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    5.1 Droits d'auteur
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    L'ensemble des contenus présents sur le site (textes,
                    photographies, logos, graphismes, vidéos, structure du site)
                    est protégé par le droit d'auteur et appartient à Abrarh
                    Photographie ou à ses partenaires.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    5.2 Protection des photographies
                  </h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    <strong className='text-accent'>
                      Toutes les photographies présentes sur ce site sont
                      protégées par le droit d'auteur et la propriété
                      intellectuelle.
                    </strong>
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Il est strictement interdit, sans autorisation écrite
                    préalable :
                  </p>
                  <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                    <li>
                      De reproduire, copier ou télécharger les photographies
                    </li>
                    <li>
                      De publier les photographies sur d'autres sites ou réseaux
                      sociaux
                    </li>
                    <li>
                      De modifier, recadrer ou retoucher les photographies
                    </li>
                    <li>
                      D'utiliser les photographies à des fins commerciales
                    </li>
                    <li>
                      De supprimer ou modifier les mentions de copyright ou
                      signatures
                    </li>
                  </ul>
                </div>

                <div className='bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900'>
                  <p className='text-sm font-semibold text-red-800 dark:text-red-300 mb-2'>
                    ⚠️ Sanctions
                  </p>
                  <p className='text-sm text-red-700 dark:text-red-400'>
                    Toute utilisation non autorisée des photographies constitue
                    une contrefaçon sanctionnée par les articles L.335-2 et
                    suivants du Code de la propriété intellectuelle. Les
                    contrevenants s'exposent à des sanctions civiles et pénales.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    5.3 Demandes d'autorisation
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Pour toute demande d'utilisation d'une photographie,
                    contactez-nous à{" "}
                    <a
                      href='mailto:abrar@photography.fr'
                      className='text-accent hover:underline'
                    >
                      abrar@photography.fr
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  6. Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Le traitement de vos données personnelles est effectué
                  conformément au Règlement Général sur la Protection des
                  Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <p className='text-sm text-muted-foreground'>
                  Pour connaître vos droits et la manière dont nous traitons vos
                  données, consultez notre{" "}
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

            {/* Section 7 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>7. Liens hypertextes</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    7.1 Liens sortants
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Le site peut contenir des liens vers d'autres sites
                    (notamment Instagram). Abrarh Photographie n'exerce aucun
                    contrôle sur ces sites et décline toute responsabilité quant
                    à leur contenu.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    7.2 Liens entrants
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    La création de liens vers le site abrarh-photographie.com
                    est autorisée, sous réserve qu'ils ne portent pas atteinte à
                    l'image et à la réputation d'Abrarh Photographie. Les liens
                    doivent pointer vers la page d'accueil du site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  8. Responsabilités et garanties
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    8.1 Informations
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Abrarh Photographie s'efforce de fournir des informations
                    précises et à jour. Toutefois, des erreurs ou omissions
                    peuvent survenir. Nous ne saurions être tenus responsables
                    des informations présentes sur le site.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    8.2 Prestations
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Ce site présente uniquement les prestations photographiques.
                    Les conditions spécifiques des prestations (tarifs, délais,
                    conditions de prise de vue) font l'objet de contrats séparés
                    conclus entre Abrarh Photographie et ses clients.
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold text-sm mb-2'>
                    8.3 Limitation de responsabilité
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Abrarh Photographie ne saurait être tenu responsable de tout
                    dommage direct ou indirect résultant de l'utilisation du
                    site, notamment en cas d'interruption, de virus, de perte de
                    données, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  9. Droit applicable et juridiction
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Les présentes CGU sont régies par le droit français. En cas de
                  litige et à défaut d'accord amiable, le litige sera porté
                  devant les tribunaux compétents français.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>10. Contact</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Pour toute question concernant les présentes CGU ou
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
              <p>
                <strong>Date d'entrée en vigueur :</strong> Janvier 2025
              </p>
              <p className='mt-2'>
                <strong>Dernière mise à jour :</strong> Janvier 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
