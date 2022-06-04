const { Post } = require("../models");

const postData = [
  {
    title: "New password generator has been released!",
    post_content:
      "This application allows users to generate a random password between 8 and 128 characters that can consists of lowercase letters, uppercase letters, numbers, and special characters.",
    user_id: 1,
  },
  {
    title: "A great way to organize your schedule!",
    post_content:
      "Use the Work Day Scheduler to keep track of your daily schedule. There are timeblocks for standard business hours that are color-coded to indicate past, present, or future. Enter event details into the text area and save to local storage using the save button.",
    user_id: 2,
  },
  {
    title: "Test your JavaScript knowledge!",
    post_content:
      "Take this timed quiz based on JavaScript fundamentals. Once the START button is pressed, the timer begins. Each incorrect answer deducts 5 seconds from the clock. Each correct answer adds 5 points to the score. When all questions are answered or the timer reaches zero, save your initials and see if you  made it into the high score chart!",
    user_id: 3,
  },
  {
    title: "New README.md generator to save time!",
    post_content:
      "Quickly generate a professional README.md from the command-line using Node.js! You will be promped to input information about the application repository, which will be displayed in the generated README.md upon completion.",
    user_id: 4,
  },
  {
    title: "Team management made easy!",
    post_content:
      "The new Team Profile Generator allows employers to easily add, update, and view team members credentials - all from the command-line! Once the whole team has been created, a generated HTML file will display the team.",
    user_id: 5,
  },
  {
    title: "Note-taking has never been so easy",
    post_content:
      "Use the new Note-Taker application to easily create, save, and delete notes. It's as easy as that!",
    user_id: 6,
  },
  {
    title: "Just Released - Weather Dashboard application",
    post_content:
      "This application allows users to see the weather outlook for multiple cities. When a city is searched, you are presented with current and future conditions for that city and that city is added to the search history.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
