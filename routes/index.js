const router = require('express').Router();
const apiRoutes = require('./api');

// set '/api/' to route
router.use('/api', apiRoutes);

// error message for incorrect route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;