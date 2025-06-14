/* const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "recetas",
  password: "bionicle2006",
  port: 5432,
});

module.exports = pool;
 */

/* const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:s10045718@db.wgqtwucvszplvqvpdyvc.supabase.co:5432/postgres",
  ssl: {
    rejectUnauthorized: false, // requerido para Supabase
  },
});

module.exports = pool;
 */

require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
