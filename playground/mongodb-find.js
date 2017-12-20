const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://10.12.76.200:27017';
const dbName = 'TodoApp'; 

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    const db = client.db(dbName);

//    db.collection('Todos').find({
//        _id: new ObjectId('5a39c9bb26bc30af8f9053a1')
//        }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 4));
//        client.close();
//    }, (err) => {
//        console.log('Unable to fetch to dos', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//        client.close();
//    }, (err) => {
//        console.log('Unable to fetch count', err);
//    });
    
    db.collection('Users').find({name: 'Dany'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
        client.close();
    }, () => {
        console.log('Unable to fetch users');
    });
    
//    client.close();
});