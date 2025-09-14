# 🚀 Guide de Déploiement Railway - ParisLens

## 📋 Prérequis

1. **Compte Railway** : Créer un compte sur [railway.app](https://railway.app)
2. **Railway CLI** : Installer la CLI Railway
3. **Git** : Repository Git configuré

## 🛠️ Installation Railway CLI

```bash
# Installation via npm
npm install -g @railway/cli

# Ou via curl
curl -fsSL https://railway.app/install.sh | sh
```

## 🚀 Déploiement Automatique

### Option 1 : Script Automatique (Recommandé)

```bash
# Exécuter le script de déploiement complet
npm run deploy
```

### Option 2 : Déploiement Manuel

```bash
# 1. Se connecter à Railway
railway login

# 2. Initialiser le projet
railway init

# 3. Ajouter PostgreSQL
railway add postgresql

# 4. Déployer
railway up

# 5. Exécuter les migrations
railway run npm run db:migrate
```

## ⚙️ Configuration des Variables d'Environnement

Dans le dashboard Railway, configurer ces variables :

### Variables Obligatoires
```env
DATABASE_URL=postgresql://... (automatiquement générée par Railway)
NODE_ENV=production
PORT=3000
```

### Variables Optionnelles
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
SESSION_SECRET=votre-clé-secrète-session
FRONTEND_URL=https://votre-app.railway.app
```

## 🗄️ Base de Données

Railway provisionne automatiquement une base PostgreSQL. La `DATABASE_URL` est automatiquement injectée.

### Migrations
```bash
# Exécuter les migrations
railway run npm run db:migrate

# Ou via le dashboard Railway
railway run drizzle-kit push
```

## 📊 Monitoring et Logs

```bash
# Voir les logs en temps réel
npm run railway:logs

# Voir le statut du déploiement
npm run railway:status

# Dashboard web
railway open
```

## 🌐 Domaines Personnalisés

1. Aller dans le dashboard Railway
2. Section "Settings" → "Domains"
3. Ajouter votre domaine personnalisé
4. Configurer les DNS selon les instructions

## 🔄 Déploiement Continu

### GitHub Integration
1. Connecter votre repository GitHub
2. Railway déploie automatiquement sur chaque push
3. Preview deployments pour les pull requests

### Webhooks
```bash
# Obtenir l'URL de webhook
railway webhook
```

## 📈 Avantages Railway

- ✅ **Full-stack** : Frontend + Backend + Base de données
- ✅ **PostgreSQL** : Base de données managée
- ✅ **CDN** : Distribution globale
- ✅ **HTTPS** : Certificats SSL automatiques
- ✅ **Monitoring** : Logs et métriques en temps réel
- ✅ **Scaling** : Mise à l'échelle automatique
- ✅ **Preview** : Déploiements de preview pour les PR

## 🆚 Railway vs Vercel

| Fonctionnalité | Railway | Vercel |
|----------------|---------|---------|
| Backend API | ✅ Complet | ⚠️ Serverless |
| Base de données | ✅ PostgreSQL | ❌ Externe |
| Full-stack | ✅ Natif | ⚠️ Limité |
| Coût | 💰 Modéré | 💰 Gratuit/Modéré |
| Simplicité | ✅ Très simple | ✅ Simple |

## 🚨 Dépannage

### Erreur de Build
```bash
# Vérifier les logs
railway logs

# Rebuild local
npm run build
```

### Erreur de Base de Données
```bash
# Vérifier la connexion
railway run node -e "console.log(process.env.DATABASE_URL)"

# Réexécuter les migrations
railway run npm run db:migrate
```

### Erreur de Port
- Railway utilise automatiquement la variable `PORT`
- Vérifier que votre app écoute sur `process.env.PORT || 3000`

## 📞 Support

- **Documentation** : [docs.railway.app](https://docs.railway.app)
- **Discord** : [Railway Discord](https://discord.gg/railway)
- **GitHub** : [Railway GitHub](https://github.com/railwayapp)

## 🎯 Prochaines Étapes

1. ✅ Déployer sur Railway
2. 🔄 Configurer les variables d'environnement
3. 🗄️ Exécuter les migrations
4. 🌐 Configurer le domaine personnalisé
5. 📊 Configurer le monitoring
6. 🔔 Configurer les notifications de déploiement
