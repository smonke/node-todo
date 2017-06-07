const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59384b4b8ba01b652e1318121';

// if(!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5938209d7204df527b24e5b9';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log('Id is not valid',e));






