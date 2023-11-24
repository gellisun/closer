const { signin, login, setAvatar } = require('../controllers/userControllers');

const router = require('express').Router();

router.post('/signin', signin);
router.post('/login', login);
router.post('/setavatar/:id', setAvatar);

module.exports = router;