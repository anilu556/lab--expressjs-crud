const { Router } = require('express');
const app = Router();
const Lists = require('../controllers/lists/lists');

app.get('/lists', Lists.getLists);

app.get('/lists/:listId', Lists.getListById);

app.post('/lists', Lists.createList)

app.put('/lists/:listId', Lists.updateListById);

app.delete('/lists/:listId', Lists.deleteListById);

module.exports = app;