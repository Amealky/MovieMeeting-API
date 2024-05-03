var Sequelize = require('sequelize');

module.exports = (api) => {

    return api.mysql.define('Genre', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'idGenre'
        },
        name: {
            type: Sequelize.DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

};