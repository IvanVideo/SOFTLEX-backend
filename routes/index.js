const router = require('express').Router();
const { getItems } = require('../controllers/items');
const { createItem } = require('../controllers/items');

router.use('/items', getItems);
router.post('/item', createItem);

module.exports = router;