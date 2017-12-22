const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5a3c4676943e0c1ac97f8ace11';
//
//if (!ObjectId.isValid(id)) {
//    console.log('Id is not valid');
//};

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('Id not found');
//    }
//    console.log('Todo by Id', todo);
//}).catch((e) => console.log(e.message));

var userId = '5a3af7513963b814cefb6a08';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('UserId not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e.message));
