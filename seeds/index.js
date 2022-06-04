const seedComments = require("./comment-data");
const seedPosts = require("./post-data");
const seedUsers = require("./user-data");

const sequelize = require("../config/config");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("****DATABASE SYNCED****");

  await seedUsers();
  console.log("****USERS SEEDED****");

  await seedPosts();
  console.log("****POSTS SEEDED****");

  await seedComments();
  console.log("****COMMENTS SEEDED****");

  process.exit(0);
};

seedAll();
