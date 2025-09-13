import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
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
          message: ""
        });
      } else {
        toast({
          title: "Erreur",
          description: result.error || "Une erreur est survenue",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Vérifiez votre connexion.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Contactez-Moi
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Prête à capturer vos moments précieux ? Parlons de votre projet !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-muted-foreground">Paris et Île-de-France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">marie@photography.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Horaires</h3>
                    <p className="text-muted-foreground">Lun-Sam: 9h-19h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Réponse Rapide</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Je réponds généralement dans les 24h. Pour les urgences, 
                  n'hésitez pas à m'appeler directement.
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-3 text-sm">Suivez-moi aussi sur :</h4>
                  <a 
                    href="https://instagram.com/marie_dubois_photo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm"
                    data-testid="link-contact-instagram"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    @marie_dubois_photo
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Demander un Devis</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        data-testid="input-nom"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        data-testid="input-email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        value={formData.telephone}
                        onChange={(e) => handleChange("telephone", e.target.value)}
                        data-testid="input-telephone"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Type de séance *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Choisissez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mariage">Mariage</SelectItem>
                          <SelectItem value="couple">Couple</SelectItem>
                          <SelectItem value="famille">Famille</SelectItem>
                          <SelectItem value="maternite">Maternité</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date">Date souhaitée</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      data-testid="input-date"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Parlez-moi de votre projet, vos envies, le lieu souhaité..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      data-testid="textarea-message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    data-testid="button-submit-contact"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande"}
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