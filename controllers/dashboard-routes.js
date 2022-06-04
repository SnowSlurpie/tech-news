const router = require("express").Router();
const sequelize = require("../config/config");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all user posts for dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.user_id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET user post datato edit
router.get("/edit/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!dbPostData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render("edit-post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new post
router.get("/create", (req, res) => {
  res.render("create-post");
});

module.exports = router;
