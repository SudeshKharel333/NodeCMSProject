const dbConfig = require("../config/dbConfig");//This line imports the database connection settings (like host, user, password) from a separate file called dbConfig.


const { Sequelize, DataTypes } = require("sequelize");//This imports Sequelize and DataTypes, which helps in defining what type of data will be stored in your database (like strings, numbers, etc.).



//This line uses the database configuration to connect to the database. It uses details like the database name, username, and password, and sets up connection pooling (how many requests the database can handle).
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("CONNECTED!!");
    })
    .catch((err) => {
        console.log("Error" + err);
    });//This block tries to connect to the database. If the connection is successful, it prints "CONNECTED!!". If it fails, it logs an error message.

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;//An empty db object is created to hold the database models and Sequelize instances.



//importing model files
db.blogs = require("./blogModel.js")(sequelize, DataTypes);
//db.reviews = require("./reviewModel.js")(sequelize, DataTypes);



db.sequelize.sync({ force: false }).then(() => {
    console.log("yes re-sync done");
});//This line syncs the model (or table) with the database. It creates tables if they don't exist. The { force: false } means it won’t delete and recreate tables if they already exist.

module.exports = db;//This exports the db object so it can be used in other parts of the application.
