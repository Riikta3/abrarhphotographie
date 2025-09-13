import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { nom, email, telephone, service, date, message } = req.body;

      // Basic validation
      if (!nom || !email || !service || !message) {
        return res.status(400).json({ 
          error: "Les champs nom, email, service et message sont requis" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Format d'email invalide" 
        });
      }

      // Here you would send the email
      // For now, we'll just log it and return success
      console.log("Contact form submission:", {
        nom,
        email,
        telephone,
        service,
        date,
        message,
        timestamp: new Date().toISOString()
      });

      // TODO: Implement actual email sending
      // await sendContactEmail({ nom, email, telephone, service, date, message });

      res.json({ 
        success: true, 
        message: "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !" 
      });

    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
