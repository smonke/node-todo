const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5944fe975fa9e35addf26d3f'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5944fe975fa9e35addf26d3f').then((todo) => {
//     console.log(todo);
// });

