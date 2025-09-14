#!/usr/bin/env node

/**
 * Script de migration de base de données pour Railway
 * Exécute les migrations Drizzle et initialise la base de données
 */

import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// Charger les variables d'environnement
config();

async function runMigrations() {
  console.log("🔄 Début des migrations de base de données...");

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "❌ DATABASE_URL n'est pas définie dans les variables d'environnement"
    );
  }

  try {
    // Connexion à la base de données
    const connection = postgres(process.env.DATABASE_URL, { max: 1 });
    const db = drizzle(connection);

    // Exécuter les migrations
    await migrate(db, { migrationsFolder: "./migrations" });

    console.log("✅ Migrations exécutées avec succès !");

    // Fermer la connexion
    await connection.end();
  } catch (error) {
    console.error("❌ Erreur lors des migrations:", error);
    process.exit(1);
  }
}

// Exécuter les migrations si ce script est appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  runMigrations();
}

export { runMigrations };
