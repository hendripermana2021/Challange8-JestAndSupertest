require("dotenv").config();
const path = require("path");

const DB_TEST_FILE_PATH = path.join(__dirname, "../db/challange8.sqlite");
const {
    DB_USEROL = "postgres",
    DB_PASSWORDOL = "1",
    DB_NAMEOL = "bcr_development",
    DB_HOSTOL = "127.0.0.1",
    DB_PORTOL = "5432",
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_URL,

  } = process.env;

module.exports = {
    development: {
        username: DB_USEROL,
        password: DB_PASSWORDOL,
        database: DB_NAMEOL,
        host: DB_HOSTOL,
        port: DB_PORTOL,
        dialect: "postgres",
        ssl: true,
    },
    test: {
        storage: DB_TEST_FILE_PATH,
        logging: false,
        dialect: "sqlite",
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        url: DB_URL,
        dialect: "postgres",
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
