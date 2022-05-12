const router = require('express').Router();

const { 
    get, 
    create, 
    update, 
    remove,
} = require('../controllers/forms');

router.get('/', get);

router.put('/add', create);

router.post('/update', update);

router.delete('/delete', remove);

module.exports = router;