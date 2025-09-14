#!/usr/bin/env node

/**
 * Script de notification client pour les déploiements Railway
 * Envoie des notifications par email ou webhook lors des déploiements
 */

import { config } from "dotenv";
import nodemailer from "nodemailer";

config();

/**
 * Configuration du transporteur email
 */
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Envoie une notification de déploiement par email
 * @param {Object} deploymentInfo - Informations sur le déploiement
 */
export async function notifyDeployment(deploymentInfo) {
  const {
    version = "v1.0.0",
    status = "success",
    url = "https://parislens.railway.app",
    features = [],
    timestamp = new Date().toISOString(),
  } = deploymentInfo;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("⚠️ Configuration SMTP manquante, notification email ignorée");
    return;
  }

  try {
    const transporter = createTransporter();

    const statusEmoji = status === "success" ? "✅" : "❌";
    const statusText = status === "success" ? "réussi" : "échoué";

    const mailOptions = {
      from: `"ParisLens" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL || "client@example.com",
      subject: `${statusEmoji} Déploiement ${statusText} - ParisLens ${version}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">📸 ParisLens</h1>
            <p style="color: white; margin: 5px 0 0 0;">Photographe Professionnel à Paris</p>
          </div>
          
          <div style="padding: 20px; background: #f8f9fa;">
            <h2 style="color: #333; margin-top: 0;">${statusEmoji} Mise à jour du Site Web</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #667eea; margin-top: 0;">Version ${version}</h3>
              <p><strong>Statut:</strong> ${statusText}</p>
              <p><strong>Date:</strong> ${new Date(timestamp).toLocaleString(
                "fr-FR"
              )}</p>
              <p><strong>URL:</strong> <a href="${url}" style="color: #667eea;">${url}</a></p>
            </div>
            
            ${
              features.length > 0
                ? `
              <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <h4 style="color: #333; margin-top: 0;">🆕 Nouvelles Fonctionnalités</h4>
                <ul style="color: #666;">
                  ${features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
              </div>
            `
                : ""
            }
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4 style="color: #1976d2; margin-top: 0;">🔗 Liens Utiles</h4>
              <p style="margin: 5px 0;">
                <a href="${url}" style="color: #1976d2; text-decoration: none;">🌐 Site Web</a>
              </p>
              <p style="margin: 5px 0;">
                <a href="${url}/dashboard" style="color: #1976d2; text-decoration: none;">📊 Dashboard Client</a>
              </p>
              <p style="margin: 5px 0;">
                <a href="https://railway.app/dashboard" style="color: #1976d2; text-decoration: none;">🚀 Railway Dashboard</a>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="${url}" 
                 style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Voir le Site Web
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; text-align: center; color: #666; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement par le système de déploiement ParisLens</p>
            <p>Pour toute question, contactez-nous à contact@parislens.fr</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Notification email envoyée avec succès");
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de la notification:", error);
  }
}

/**
 * Envoie une notification webhook (pour intégration avec Slack, Discord, etc.)
 * @param {Object} deploymentInfo - Informations sur le déploiement
 */
export async function notifyWebhook(deploymentInfo) {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("⚠️ URL webhook non configurée, notification webhook ignorée");
    return;
  }

  try {
    const payload = {
      text: `🚀 Déploiement ParisLens ${deploymentInfo.version}`,
      attachments: [
        {
          color: deploymentInfo.status === "success" ? "good" : "danger",
          fields: [
            {
              title: "Version",
              value: deploymentInfo.version,
              short: true,
            },
            {
              title: "Statut",
              value:
                deploymentInfo.status === "success" ? "✅ Réussi" : "❌ Échoué",
              short: true,
            },
            {
              title: "URL",
              value: deploymentInfo.url,
              short: false,
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("✅ Notification webhook envoyée avec succès");
    } else {
      console.error("❌ Erreur webhook:", response.statusText);
    }
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du webhook:", error);
  }
}

/**
 * Fonction principale de notification
 * @param {Object} deploymentInfo - Informations sur le déploiement
 */
export async function notifyClient(deploymentInfo) {
  console.log("📧 Envoi des notifications client...");

  await Promise.all([
    notifyDeployment(deploymentInfo),
    notifyWebhook(deploymentInfo),
  ]);

  console.log("✅ Toutes les notifications ont été envoyées");
}

// Exécuter si ce script est appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  const deploymentInfo = {
    version: process.argv[2] || "v1.0.0",
    status: process.argv[3] || "success",
    url: process.argv[4] || "https://parislens.railway.app",
    features: process.argv[5] ? process.argv[5].split(",") : [],
  };

  notifyClient(deploymentInfo);
}
