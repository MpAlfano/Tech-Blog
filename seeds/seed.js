const sequelize = require("../config/connection");
// const { User } = require("../models");

const userData = require("./blogData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await .bulkCreate(blogData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
