module.exports = (sequelize, DataTypes) => {
    //This line allows the blog model to be used in other parts of the application. It takes two things:sequelize: The connection to the database.DataTypes: The types of data (like string, number, etc.) for defining the columns in the table.
    const blog = sequelize.define("blog", {
        //This defines a new model (or table) called "blog". The sequelize.define function creates the structure for this table, where each blog entry will have certain fields (or columns).
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // published: {
        //     type: DataTypes.BOOLEAN,
        // },
    });
    return blog;
};