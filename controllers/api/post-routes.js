const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
const sequelize = require("../../config/connection");
//CREATES post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATES post
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

// DELETES POST
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
