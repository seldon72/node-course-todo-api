const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://10.12.76.200:27017';
const dbName = 'TodoApp'; 

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db(dbName);

    // Delete Many
//    db.collection('Todos').deleteMany({text: 'Eat breakfast'}).then((result) => {
//        console.log(result); 
//        client.close();
//    });
    
    // Delete one
//    db.collection('Todos').deleteOne({text: 'Eat breakfast'}).then((result) => {
//        console.log(result); 
//        client.close();
//    });
    
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//        client.close();
//    });
    
//    db.collection('Users').deleteMany({name: 'Diego'}).then((result) => {
//        console.log(result);
//        client.close();
//    });
    
    userId = new ObjectId('5a39d08426bc30af8f90546a');
    
    db.collection('Users').findOneAndDelete(userId).then((result) => {
        console.log(result);
        client.close();
    });
    
//    client.close();
});