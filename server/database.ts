const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Popodom121",
  port: 5432,
  database: "mat_tracker",
});

export { pool };
