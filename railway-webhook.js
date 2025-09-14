/**
 * Webhook Railway pour les notifications de déploiement
 * Ce fichier peut être utilisé pour créer un endpoint webhook
 * qui sera appelé par Railway lors des déploiements
 */

import express from "express";
import { notifyClient } from "./scripts/notify-client.js";

const app = express();
app.use(express.json());

/**
 * Endpoint webhook pour les déploiements Railway
 */
app.post("/webhook/railway", async (req, res) => {
  try {
    const { deployment } = req.body;

    if (!deployment) {
      return res
        .status(400)
        .json({ error: "Données de déploiement manquantes" });
    }

    const deploymentInfo = {
      version: deployment.meta?.gitCommitSha?.substring(0, 7) || "v1.0.0",
      status: deployment.status === "SUCCESS" ? "success" : "failed",
      url: deployment.url || "https://parislens.railway.app",
      features: deployment.meta?.features || [],
      timestamp: deployment.createdAt || new Date().toISOString(),
    };

    // Envoyer les notifications
    await notifyClient(deploymentInfo);

    res.json({
      success: true,
      message: "Notifications envoyées avec succès",
      deployment: deploymentInfo,
    });
  } catch (error) {
    console.error("Erreur webhook Railway:", error);
    res.status(500).json({
      error: "Erreur lors du traitement du webhook",
      details: error.message,
    });
  }
});

/**
 * Endpoint de santé pour Railway
 */
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "ParisLens Webhook Handler",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Webhook server démarré sur le port ${PORT}`);
});

export default app;
