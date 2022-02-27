const router = require('express').Router();
const { getItems } = require('../controllers/items');
const { createItem } = require('../controllers/items');
const { createUser } = require('../controllers/users');
const { login } = require('../controllers/users');
const { getUserInfo } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.use('/items', getItems);
router.post('/item', createItem);
router.post('/signup', createUser);
router.post('/signin', login);
router.use('/check', auth, getUserInfo);

module.exports = router;