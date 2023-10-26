'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({User, Question}) {
      this.belongsTo(Question, { foreignKey: 'question_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })

    }
  }
  Game.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id'
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
},
  {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};