#!/bin/bash

# Script de déploiement Railway pour ParisLens
# Ce script automatise le déploiement et la configuration

set -e

echo "🚀 Déploiement de ParisLens sur Railway..."

# Vérifier que Railway CLI est installé
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI n'est pas installé. Installation..."
    npm install -g @railway/cli
fi

# Se connecter à Railway
echo "🔐 Connexion à Railway..."
railway login

# Créer un nouveau projet si nécessaire
echo "📦 Création du projet Railway..."
railway init

# Ajouter la base de données PostgreSQL
echo "🗄️ Ajout de la base de données PostgreSQL..."
railway add postgresql

# Déployer l'application
echo "🚀 Déploiement de l'application..."
railway up

# Exécuter les migrations de base de données
echo "🔄 Exécution des migrations..."
railway run npm run db:push

# Obtenir l'URL de déploiement
echo "🌐 Récupération de l'URL de déploiement..."
DEPLOY_URL=$(railway domain)

echo "✅ Déploiement terminé !"
echo "🌐 URL de l'application: $DEPLOY_URL"
echo "📊 Dashboard Railway: https://railway.app/dashboard"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Configurer les variables d'environnement dans Railway"
echo "2. Tester l'application"
echo "3. Configurer le domaine personnalisé si nécessaire"
