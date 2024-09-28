module.exports = {//This allows the configuration to be used in other files when needed.

    HOST: "localhost",//The database is hosted on your local machine.

    USER: "root",//The username for accessing the database is "root" (usually the default for local databases).

    PASSWORD: "",
    DB: "cms",//The name of the database you're connecting to is "cms".

    dialect: "mysql",//Specifies the type of database you're using, which in this case is MySQL. Other options like PostgreSQL or SQLite can also be used by changing "mysql" to the respective name.
    pool: {
        max: 5,//max 5 wota request handle grxa at one time
        min: 0,//At least 0 connections (meaning none if not needed).

        acquire: 30000,//If a connection is not available, it will wait for 30 seconds (30,000 milliseconds) before giving up.
        idle: 10000,//If a connection is idle (not being used) for 10 seconds, it will be closed.

    },
};