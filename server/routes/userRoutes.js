const { signin } = require('../controllers/userControllers');

const router = require('express').Router();

router.post('/signin', signin)

module.exports = router;