const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/forms', require('./forms'));

module.exports = router;