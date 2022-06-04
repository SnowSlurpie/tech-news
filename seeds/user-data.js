const { User } = require("../models");

const userData = [
  {
    username: "chudson",
    password: "123456",
  },
  {
    username: "j_oralia",
    password: "pinkmonkey",
  },
  {
    username: "wah500",
    password: "p@ssw0rd1",
  },
  {
    username: "mary_pat2",
    password: "gardengirl",
  },
  {
    username: "mhud92",
    password: "bluefish",
  },
  {
    username: "rachelrocks",
    password: "flower1234",
  },
  {
    username: "olliepop1",
    password: "mustlovedogs",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
