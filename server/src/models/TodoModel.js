const { DataTypes, Model } = require("sequelize");

class todo_table extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
        }, { sequelize })
    };
};

module.exports = todo_table; 
