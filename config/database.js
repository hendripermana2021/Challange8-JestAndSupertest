const Sequelize = require('sequelize')
require("dotenv").config();
const path = require("path");

const DB_TEST_FILE_PATH = path.join(__dirname, "../db/challange8.sqlite");
const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_URI

  } = process.env;

module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
        ssl: true,
    },
    test: {
        storage: DB_TEST_FILE_PATH,
        logging: false,
        dialect: "sqlite",
    },
    production: {
        url : DB_URI
    },
};
