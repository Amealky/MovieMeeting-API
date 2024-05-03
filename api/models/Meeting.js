var Sequelize = require('sequelize');

module.exports = (api) => {

    return api.mysql.define('Meeting', {
        idMeeting: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: Sequelize.DataTypes.STRING
        },
        meetingDate: {
            type: Sequelize.DataTypes.DATE
        },
        idMovie: {
            type: Sequelize.DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

};