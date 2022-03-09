const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User");

//user has many posts, user has many comments
//posts belong to user
//posts has many comments

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { Post, Comment, User };
