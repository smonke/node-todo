const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcryrpt = require('bcryptjs');

var password = '123abc!';

// bcryrpt.genSalt(10, (err, salt) => {
//     bcryrpt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$XqjfvosNJ6OYSeB6sdx.7OGnRIs6Xj2IF/Hsj6ej9.D51QDk3VbBS';

bcryrpt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});



// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abd');
// console.log(token);

// var decoded = jwt.verify(token, '123abd');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString;

// if(resultHash === token.hash) {
//     console.log('Data was not changes');
// } else {
//     console.log('Data was changed. Do not trust');
// }
