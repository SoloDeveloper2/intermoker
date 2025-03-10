/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_fCenlz3NM4cW@ep-muddy-meadow-a8pllxxu-pooler.eastus2.azure.neon.tech/ai-interview-moker?sslmode=require',
    }
  };