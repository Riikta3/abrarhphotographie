import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";

/**
 * Dashboard client pour suivre l'avancée du projet
 * Affiche les dernières mises à jour, les déploiements et les métriques
 */
export default function ClientDashboard() {
  const deployments = [
    {
      id: 1,
      version: "v1.2.0",
      date: "2024-01-15",
      status: "success",
      features: [
        "Nouvelle galerie",
        "Optimisation mobile",
        "Formulaire de contact amélioré",
      ],
    },
    {
      id: 2,
      version: "v1.1.0",
      date: "2024-01-10",
      status: "success",
      features: ["Page À propos", "Témoignages clients", "SEO optimisé"],
    },
  ];

  const progress = [
    { task: "Design & UI", progress: 100, status: "completed" },
    { task: "Développement Frontend", progress: 95, status: "in-progress" },
    { task: "Intégration Backend", progress: 80, status: "in-progress" },
    { task: "Tests & Optimisation", progress: 60, status: "pending" },
    { task: "Déploiement Production", progress: 40, status: "pending" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6'>
      <div className='max-w-6xl mx-auto space-y-8'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-slate-900'>
            Dashboard Client - Abrarhphotographie
          </h1>
          <p className='text-lg text-slate-600'>
            Suivez l'avancée de votre site web en temps réel
          </p>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              📊 Avancement Global
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            {progress.map((item, index) => (
              <div
                key={index}
                className='space-y-2'
              >
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>{item.task}</span>
                  <div className='flex items-center gap-2'>
                    <Badge
                      variant={
                        item.status === "completed"
                          ? "default"
                          : item.status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {item.status === "completed"
                        ? "✅ Terminé"
                        : item.status === "in-progress"
                        ? "🔄 En cours"
                        : "⏳ En attente"}
                    </Badge>
                    <span className='text-sm text-slate-600'>
                      {item.progress}%
                    </span>
                  </div>
                </div>
                <Progress
                  value={item.progress}
                  className='h-2'
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Deployments */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              🚀 Derniers Déploiements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {deployments.map((deployment) => (
                <div
                  key={deployment.id}
                  className='border rounded-lg p-4 space-y-3'
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-lg'>
                      {deployment.version}
                    </h3>
                    <div className='flex items-center gap-2'>
                      <Badge
                        variant='default'
                        className='bg-green-500'
                      >
                        ✅ Déployé
                      </Badge>
                      <span className='text-sm text-slate-600'>
                        {deployment.date}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className='font-medium mb-2'>
                      Nouvelles fonctionnalités :
                    </h4>
                    <ul className='list-disc list-inside space-y-1 text-sm text-slate-600'>
                      {deployment.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              👀 Aperçu en Direct
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <h4 className='font-medium'>🌐 Site de Production</h4>
                <a
                  href='#'
                  className='text-blue-600 hover:underline block'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://abrarhphotographie.netlify.app
                </a>
                <Badge
                  variant='default'
                  className='bg-green-500'
                >
                  ✅ En ligne
                </Badge>
              </div>
              <div className='space-y-2'>
                <h4 className='font-medium'>🔧 Version de Test</h4>
                <a
                  href='#'
                  className='text-blue-600 hover:underline block'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://abrarhphotographie-staging.netlify.app
                </a>
                <Badge variant='secondary'>🧪 Test</Badge>
              </div>
            </div>
            <div className='mt-4 p-3 bg-blue-50 rounded-lg'>
              <h5 className='font-medium text-blue-900 mb-2'>
                🚀 Netlify Dashboard
              </h5>
              <p className='text-sm text-blue-700 mb-2'>
                Suivez les déploiements en temps réel sur Netlify
              </p>
              <a
                href='#'
                className='text-blue-600 hover:underline text-sm'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ouvrir le dashboard Netlify →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              📞 Support & Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-medium mb-2'>💬 Communication</h4>
                <p className='text-sm text-slate-600 mb-2'>
                  Mises à jour hebdomadaires tous les vendredis
                </p>
                <p className='text-sm text-slate-600'>
                  Réponse sous 24h pour toute question
                </p>
              </div>
              <div>
                <h4 className='font-medium mb-2'>📧 Contact Direct</h4>
                <p className='text-sm text-slate-600'>
                  Email: contact@abrarhphotographie.fr
                </p>
                <p className='text-sm text-slate-600'>
                  Téléphone: +33 1 23 45 67 89
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
