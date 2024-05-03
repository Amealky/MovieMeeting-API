var Sequelize = require('sequelize');

module.exports = (api) => {

    return api.mysql.define('MovieGenre', {
    }, {
        freezeTableName: true,
        timestamps: false
    });
};