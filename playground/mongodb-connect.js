//const {MongoClient, ObjectId} = require('mongodb');
//
//var obj = new ObjectId;
//console.log(obj);
//console.log(obj.getTimestamp());

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://10.12.76.200:27017';
const dbName = 'TodoApp'; 


// Object deconstruct - 
// Crea una variable de un elemento de un objeto
//var user = {name: 'Hari Seldon', age: 30};
//var {name} = user;
//console.log(name);


MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db(dbName);
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if (err) {
//            return console.log('Unable to insert to do', err);
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    db.collection('Users').insertOne({
        name: 'Ulises',
        age: 38,
        location: 'Grecia'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id);
        console.log(result.ops[0]._id.getTimestamp());
    });
    
    client.close();
});