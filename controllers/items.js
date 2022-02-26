const items = require('../models/items');

const getItems = (req, res, next) => {
  return items.find({})
    .then(item => res.send({ data: item }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}

const createItem = (req, res, next) => {
  const {
    name,
    mail,
    text,
    status,
  } = req.body;
  items.create({
    name,
    mail,
    text,
    status,
  })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectData(invalid);
      }
      throw err;
    })
    .catch(next);
};

module.exports = {
  getItems,
  createItem,
};