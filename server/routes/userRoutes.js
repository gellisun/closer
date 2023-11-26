const { signin, login, setAvatar, getAllUsers } = require('../controllers/userControllers');

const router = require('express').Router();

router.post('/signin', signin);
router.post('/login', login);
router.post('/setavatar/:id', setAvatar);
router.get('/allusers/:id', getAllUsers);

module.exports = router;