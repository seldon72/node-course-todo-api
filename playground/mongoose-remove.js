const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findByIdAndRemove('5a3e86eddc393c6dff2c1c44').then((todo) => {
//     console.log(todo);
// })

Todo.findOneAndRemove({_id: '5a3e8837dc393c6dff2c1ca8'}).then((todo) => {
    console.log(todo);
});
