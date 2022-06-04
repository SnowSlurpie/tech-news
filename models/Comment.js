const sequelize = require("../config/config");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
  {
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
