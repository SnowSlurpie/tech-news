const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;