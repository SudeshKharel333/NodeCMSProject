module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blog", {
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