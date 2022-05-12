const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/forms', require('./forms'));
router.use('/responses', require('./responses'));

module.exports = router;