var mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://10.12.76.200:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });

module.exports = {mongoose};
