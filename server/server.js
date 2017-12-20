var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.12.76.200:27017/TodoApp', { useMongoClient: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Play with the kids',
    completed: false,
    completedAt: Date.now()
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
   console.log('Unable to save todo'); 
});
