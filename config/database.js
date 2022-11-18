require("dotenv").config();
const path = require("path");

const DB_TEST_FILE_PATH = path.join(__dirname, "../db/challange8.sqlite");
const {
    DB_USER = "postgres",
    DB_PASSWORD = "1",
    DB_NAME = "bcr",
    DB_HOST = "127.0.0.1",
    DB_PORT = "5432",
    DB_URI
  } = process.env;

module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_development`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres"
    },
    test: {
        storage: DB_TEST_FILE_PATH,
        logging: false,
        dialect: "sqlite"
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: `${DB_NAME}_production`,
        host: DB_HOST,
        port: DB_PORT,
        url : DB_URI,
        dialect: "postgres"
      }
};
