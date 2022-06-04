const router = require('express').Router();
const CommentRoutes = require('./comment-routes');
const PostRoutes = require('./post-routes');
const UserRoutes = require('./user-routes');

router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;