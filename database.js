"use strict";
exports.__esModule = true;
var Pool = require("pg").Pool;
require("dotenv").config();
var devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
};
var proConfig = {
    connectionString: process.env.DATABASE_URL
};
var pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
exports.pool = pool;
