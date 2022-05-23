const router = require('express').Router();
const passport = require('passport')

const { 
    get, 
    getByUser,
    getById,
    create, 
    update, 
    remove,
} = require('../controllers/forms');

router.get('/', get);

router.get('/:id', getById);

router.get('/user/:username', getByUser);

router.put('/add', passport.authenticate('jwt', {session: false}), create);

router.post('/update', update);

router.delete('/delete', remove);

module.exports = router;