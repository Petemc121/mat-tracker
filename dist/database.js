"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const Pool = require("pg").Pool;
require("dotenv").config();
const devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
};
const proConfig = {
    connectionString: process.env.DATABASE_URL, //heroku addons
};
const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
exports.pool = pool;
//# sourceMappingURL=database.js.map