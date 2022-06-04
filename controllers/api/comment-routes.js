const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
//changed userId to user_id 
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GETS single comment
router.get("/:id", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATES new comment
router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    try {
      const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//UPDATES comment
router.put("/:id", withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETES comment
router.delete("/:id", async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;