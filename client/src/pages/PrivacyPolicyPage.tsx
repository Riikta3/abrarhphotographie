/**
 * Privacy Policy Page
 * GDPR-compliant privacy policy for the photography website
 */

import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

/**
 * Privacy Policy page component
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Abrarh Photographie</title>
        <meta
          name='description'
          content="Politique de confidentialité et protection des données personnelles d'Abrarh Photographie. Conformité RGPD."
        />
        <meta
          name='robots'
          content='noindex, follow'
        />
      </Helmet>

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
            {/* Section 1 */}
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
                  <strong>Zone d'activité :</strong> Seine-et-Marne et
                  Île-de-France
                  <br />
                  <strong>Contact :</strong> abrar@photography.fr
                  <br />
                  <strong>Site web :</strong> abrarh-photographie.com
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
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
                    <strong>Données collectées :</strong>
                  </p>
                  <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Type de prestation souhaitée</li>
                    <li>Date souhaitée</li>
                    <li>Message</li>
                    <li>Adresse IP (pour la sécurité)</li>
                  </ul>
                  <p className='text-sm text-muted-foreground mt-2'>
                    <strong>Finalité :</strong> Répondre à vos demandes de
                    renseignements, établir des devis et gérer la relation
                    client.
                  </p>
                  <p className='text-sm text-muted-foreground mt-2'>
                    <strong>Base légale :</strong> Consentement (article 6.1.a
                    du RGPD) et exécution de mesures précontractuelles (article
                    6.1.b du RGPD).
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold mb-2'>
                    2.2 Navigation sur le site
                  </h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    <strong>Données collectées :</strong>
                  </p>
                  <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                    <li>Cookies techniques (nécessaires)</li>
                    <li>
                      Cookies analytiques (Google Analytics - avec consentement)
                    </li>
                    <li>Données de navigation (pages visitées, durée)</li>
                  </ul>
                  <p className='text-sm text-muted-foreground mt-2'>
                    <strong>Finalité :</strong> Assurer le bon fonctionnement du
                    site et améliorer l'expérience utilisateur.
                  </p>
                  <p className='text-sm text-muted-foreground mt-2'>
                    <strong>Base légale :</strong> Intérêt légitime (cookies
                    techniques) et consentement (cookies analytiques).
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold mb-2'>
                    2.3 Photographies et séances
                  </h3>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Les photographies prises lors des séances sont soumises à un
                    contrat séparé. Aucune photo n'est publiée sur le site ou
                    les réseaux sociaux sans autorisation écrite explicite
                    (droit à l'image).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  3. Durée de conservation
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='text-sm text-muted-foreground'>
                  <p className='mb-2'>
                    Vos données sont conservées uniquement le temps nécessaire
                    aux finalités pour lesquelles elles ont été collectées :
                  </p>
                  <ul className='list-disc list-inside space-y-1 ml-4'>
                    <li>
                      <strong>Demandes de contact :</strong> 3 ans à compter du
                      dernier contact
                    </li>
                    <li>
                      <strong>Données clients (avec contrat) :</strong> Durée
                      légale de conservation comptable (10 ans)
                    </li>
                    <li>
                      <strong>Cookies analytiques :</strong> 13 mois maximum
                    </li>
                    <li>
                      <strong>Logs de sécurité :</strong> 12 mois
                    </li>
                  </ul>
                  <p className='mt-4'>
                    Passé ces délais, vos données sont supprimées ou anonymisées
                    de manière irréversible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  4. Destinataires des données
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Vos données personnelles sont traitées par :
                </p>
                <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                  <li>
                    <strong>Abrarh Photographie</strong> (photographe et
                    propriétaire du site)
                  </li>
                  <li>
                    <strong>Prestataires techniques :</strong>
                    <ul className='list-circle list-inside ml-6 mt-1'>
                      <li>Hébergeur web (localisation : France/UE)</li>
                      <li>Service d'emailing (si utilisé)</li>
                      <li>Google Analytics (avec anonymisation IP)</li>
                    </ul>
                  </li>
                </ul>
                <p className='text-sm text-muted-foreground mt-4'>
                  <strong>Important :</strong> Vos données ne sont jamais
                  vendues, louées ou échangées avec des tiers à des fins
                  commerciales.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>5. Vos droits RGPD</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className='space-y-3'>
                  <div>
                    <h4 className='font-semibold text-sm'>Droit d'accès</h4>
                    <p className='text-sm text-muted-foreground'>
                      Obtenir une copie de vos données personnelles.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit de rectification
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Corriger des données inexactes ou incomplètes.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit à l'effacement
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Demander la suppression de vos données (droit à l'oubli).
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit à la limitation
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Limiter le traitement de vos données.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit à la portabilité
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Recevoir vos données dans un format structuré et lisible.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit d'opposition
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Vous opposer au traitement de vos données.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Droit de retirer votre consentement
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Retirer votre consentement à tout moment.
                    </p>
                  </div>
                </div>
                <div className='bg-accent/10 p-4 rounded-lg mt-4'>
                  <p className='text-sm font-semibold mb-2'>
                    Comment exercer vos droits ?
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Envoyez un email à{" "}
                    <a
                      href='mailto:abrar@photography.fr'
                      className='text-accent hover:underline'
                    >
                      abrar@photography.fr
                    </a>{" "}
                    en précisant votre demande. Nous nous engageons à répondre
                    dans un délai d'un mois.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>6. Cookies</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Notre site utilise des cookies pour améliorer votre expérience
                  :
                </p>
                <div className='space-y-3'>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Cookies nécessaires (toujours actifs)
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Essentiels au fonctionnement du site (navigation,
                      sécurité, préférences).
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-sm'>
                      Cookies analytiques (avec consentement)
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      Google Analytics (IP anonymisée) pour comprendre comment
                      vous utilisez notre site.
                    </p>
                  </div>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Vous pouvez gérer vos préférences de cookies à tout moment via
                  le bandeau de cookies ou les paramètres de votre navigateur.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>7. Sécurité</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-sm text-muted-foreground'>
                  Nous mettons en œuvre toutes les mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  personnelles contre :
                </p>
                <ul className='text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4'>
                  <li>L'accès non autorisé</li>
                  <li>La perte accidentelle</li>
                  <li>La destruction ou l'altération</li>
                  <li>La divulgation non autorisée</li>
                </ul>
                <p className='text-sm text-muted-foreground mt-4'>
                  <strong>Mesures de sécurité :</strong> HTTPS/SSL, limitation
                  du taux de requêtes (rate limiting), validation des données,
                  sauvegardes régulières, accès restreints.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>
                  8. Modifications de la politique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  Cette politique de confidentialité peut être modifiée pour
                  refléter les évolutions de nos pratiques ou des obligations
                  légales. La version en vigueur est toujours disponible sur
                  cette page.
                </p>
                <p className='text-sm text-muted-foreground mt-2'>
                  <strong>Dernière mise à jour :</strong> Janvier 2025
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>9. Réclamation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  Si vous estimez que vos droits ne sont pas respectés, vous
                  pouvez introduire une réclamation auprès de la Commission
                  Nationale de l'Informatique et des Libertés (CNIL) :
                </p>
                <div className='bg-muted p-4 rounded-lg mt-4'>
                  <p className='text-sm font-semibold'>CNIL</p>
                  <p className='text-sm text-muted-foreground'>
                    3 Place de Fontenoy - TSA 80715
                    <br />
                    75334 PARIS CEDEX 07
                    <br />
                    Téléphone : 01 53 73 22 22
                    <br />
                    <a
                      href='https://www.cnil.fr'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-accent hover:underline'
                    >
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className='bg-accent/5'>
              <CardHeader>
                <CardTitle className='text-xl'>Des questions ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  Pour toute question concernant cette politique de
                  confidentialité ou le traitement de vos données personnelles,
                  n'hésitez pas à nous contacter :
                </p>
                <p className='text-sm mt-4'>
                  <strong>Email :</strong>{" "}
                  <a
                    href='mailto:abrar@photography.fr'
                    className='text-accent hover:underline'
                  >
                    abrar@photography.fr
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
