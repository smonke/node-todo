//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Sonja', age: 35};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to the MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    // findOneAndDelete
    // db.collection(Todos).findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // });

    // deleteMany User sonja
    db.collection('Users').deleteMany({name: 'Jen'}).this((result) => {
        console.log(result);
    });

    // dinfOneAndDelete by id
    // db.collection('Users').findOneAndDelete({_id: '593447d2f4ece5df3797493a'}).this((result) => {
    //     console.log(result);
    // });

    db.close();
});

