// imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// imports our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model {}
// set up fields and rules for Comment model
Comment.init(
  {
    // defines columns
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);
module.exports = Comment;