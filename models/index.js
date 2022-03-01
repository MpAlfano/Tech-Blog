const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User");

//user has many posts, user has many comments
//posts belong to user posts
//posts has many

module.exports = { Post, Comment, User };
