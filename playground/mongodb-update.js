const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://10.12.76.200:27017';
const dbName = 'TodoApp'; 

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db(dbName);

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectId('5a3aa4ff487b25d3e61000c0')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//        client.close();
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5a39d08426bc30af8f90546a')
    }, {
        $set: {
            name: 'Paco'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result);
        client.close();
    });
    
//    client.close();
});