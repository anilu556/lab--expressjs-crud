const data = require('../../../data');
let { lists } = data.boards[0];
const ERROR = {message: '404. Not Found'};

const controllers = {
    getLists: (req, res) => {
        res.json(lists).status(200);
    },
    getListById: (req, res) => {
        const { listId } = req.params;

        const foundList = lists.filter(list => list.id === listId);
        
        if(foundList[0]) {
            res.json(foundList[0]).status(200);
        } else {
            res.json(ERROR).status(404);
        }
    },
    createList: (req, res) => {
        let listToCreate = req.body;
        let id = lists.length + 1;

        listToCreate["id"] = id.toString();
        lists.push(listToCreate);
        res.json(lists).status(200);
    },
    updateListById: (req, res) => {
        const { listId } = req.params;
        const listInformation = req.body;

        let listToUpdate = lists.filter(list => list.id === listId);
        let updatedLists = lists.filter(list => list.id !== listId);
        let updatedList = Object.assign(listToUpdate[0], listInformation);

        updatedLists.push(updatedList);
        res.json(updatedLists).status(200);        
    },
    deleteListById: (req, res) => {
        const { listId } = req.params;

        const listToDelete = lists.filter(list => list.id === listId);

        if(listToDelete[0].cards.length !== 0){
            lists = lists.filter(list => list.id !== listId);
            res.json(lists).status(200);
        }
    }
}

module.exports = controllers;