var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.12.76.200:27017/TodoApp', { useMongoClient: true });

module.exports = {mongoose};
