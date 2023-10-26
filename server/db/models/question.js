'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Game, Theme}) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' })
      this.hasMany(Game, { foreignKey: 'question_id' })
    }
  }
  Question.init({
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Themes',
        key: 'id'
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};