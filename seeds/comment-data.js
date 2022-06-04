const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_text: "This is a very helpful tool!",
  },
  {
    user_id: 2,
    post_id: 7,
    comment_text: "Great application! I am able to easily see my team's schedule!",
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text:
      "This is a great application! Very helpful in creating secure passwords.",
  },
  {
    user_id: 4,
    post_id: 3,
    comment_text: "Helpful tool for reviewing JavaScript concepts!",
  },
  {
    user_id: 5,
    post_id: 4,
    comment_text: "This has been such a great time-saver!",
  },
  {
    user_id: 6,
    post_id: 6,
    comment_text:
      "Awesome work!",
  },
  {
    user_id: 7,
    post_id: 5,
    comment_text: "Very useful!",
  },
  {
    user_id: 1,
    post_id: 7,
    comment_text:
      "This is a great application. Accurate weather data in a nicely displayed format!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;