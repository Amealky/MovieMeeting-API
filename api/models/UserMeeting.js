var Sequelize = require('sequelize');

module.exports = (api) => {

    return api.mysql.define('UserMeeting', {
    }, {
        freezeTableName: true,
        timestamps: false
    });

};