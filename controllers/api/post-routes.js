const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const sequelize = require("../../config/config");
const withAuth = require("../../utils/auth");

// CREATE new post
router.post("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
    });
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if (!dbPostData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    Post.destroy({
      where: { id: req.params.id },
    });
    if (!dbPostData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
