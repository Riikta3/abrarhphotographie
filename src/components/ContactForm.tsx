"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactSubmissionData } from "@/lib/contact";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    date: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // Honeypot field to catch bots
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  /**
   * Envoi du formulaire de contact vers /api/contact
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Le Select Radix n'est pas un champ natif : la validation HTML5 du
    // formulaire ne le couvre pas, on le vérifie donc explicitement.
    if (!formData.service) {
      toast({
        title: "Type de séance manquant",
        description: "Sélectionnez le type de séance souhaité pour continuer.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Libellés attendus côté serveur
      const serviceMap: Record<string, ContactSubmissionData["service"]> = {
        mariage: "Mariage",
        couple: "Couple",
        famille: "Famille",
        maternite: "Maternité",
        autre: "Autre",
      };

      const submissionData: ContactSubmissionData & { website?: string } = {
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone || undefined,
        service: serviceMap[formData.service] || undefined,
        date: formData.date || undefined,
        message: formData.message,
        website: honeypot, // Honeypot field - should be empty for real users
      };

      const result = await submitContactForm(submissionData);

      toast({
        title: "Message envoyé !",
        description: result.message,
      });

      // Reset form
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        service: "",
        date: "",
        message: "",
      });
      setHoneypot("");
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Impossible d'envoyer le message. Vérifiez votre connexion.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className='py-16 sm:py-20 lg:py-24 bg-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12'>
          {/* Contact Info */}
          <div className='space-y-6 sm:space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='font-serif text-2xl'>
                  Contact Photographe
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div
                  className='flex items-start space-x-4'
                  data-testid='contact-location'
                >
                  <div className='p-2 bg-accent/10 rounded-full'>
                    <MapPin className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Zone d'Intervention</h3>
                    <p className='text-muted-foreground'>
                      Photographe en Seine-et-Marne et Île-de-France
                    </p>
                  </div>
                </div>

                <div
                  className='flex items-start space-x-4'
                  data-testid='contact-email'
                >
                  <div className='p-2 bg-accent/10 rounded-full'>
                    <Mail className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Email</h3>
                    <p className='text-muted-foreground'>
                      abrar@photography.fr
                    </p>
                  </div>
                </div>

                <div
                  className='flex items-start space-x-4'
                  data-testid='contact-instagram'
                >
                  <div className='p-2 bg-accent/10 rounded-full'>
                    <Instagram className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Instagram</h3>
                    <a
                      href='https://instagram.com/abrar.hphotographie'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-accent transition-colors'
                    >
                      @abrar.hphotographie
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-medium mb-4'>Réponse Rapide</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  Photographe professionnelle en Seine-et-Marne, je réponds
                  généralement dans les 24h par email.
                </p>

                <div className='border-t border-border pt-4'>
                  <h4 className='font-medium mb-3 text-sm'>
                    Suivez-moi & contactez-moi aussi sur :
                  </h4>
                  <a
                    href='https://instagram.com/abrar.hphotographie'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm'
                    data-testid='link-contact-instagram'
                  >
                    <Instagram className='w-4 h-4 mr-2' />
                    @abrar.hphotographie{" "}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle className='font-serif text-2xl'>
                  Demander un Devis Gratuit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4 sm:space-y-6'
                >
                  {/* Honeypot field - hidden from real users, visible to bots */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ 
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px',
                      height: '1px',
                    }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <Label htmlFor='nom'>Nom complet *</Label>
                      <Input
                        id='nom'
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        data-testid='input-nom'
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor='email'>Email *</Label>
                      <Input
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        data-testid='input-email'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <Label htmlFor='telephone'>Téléphone</Label>
                      <Input
                        id='telephone'
                        value={formData.telephone}
                        onChange={(e) =>
                          handleChange("telephone", e.target.value)
                        }
                        data-testid='input-telephone'
                      />
                    </div>

                    <div>
                      <Label htmlFor='service'>Type de séance *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                      >
                        <SelectTrigger data-testid='select-service'>
                          <SelectValue placeholder='Choisissez votre type de séance' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='mariage'>
                            Photographe Mariage
                          </SelectItem>
                          <SelectItem value='couple'>Séance Couple</SelectItem>
                          <SelectItem value='famille'>
                            Portrait Famille
                          </SelectItem>
                          <SelectItem value='maternite'>
                            Séance Maternité
                          </SelectItem>
                          <SelectItem value='autre'>Autre Projet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='date'>Date souhaitée</Label>
                    <Input
                      id='date'
                      type='date'
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      data-testid='input-date'
                      className='[&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:cursor-pointer'
                    />
                  </div>

                  <div>
                    <Label htmlFor='message'>Message *</Label>
                    <Textarea
                      id='message'
                      placeholder='Parlez-moi de votre projet photographique, vos envies, le lieu souhaité en Seine-et-Marne ou Île-de-France...'
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      data-testid='textarea-message'
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full'
                    data-testid='button-submit-contact'
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Demander mon Devis Gratuit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
