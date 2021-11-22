const mysql = require('mysql2');

// const host = 'aleksha3.beget.tech';
// const user = 'aleksha3_al';
// const database = 'aleksha3_al';
// const password = '147258369A-a';


const host = '127.0.0.1';
const user = 'root';
const database = 'employers';
const password = '123456789';


//OLD CONNECTION
// const connection = mysql.createConnection({
//     host: host,
//     user: user,
//     database: database,
//     password: password,
//     dialect: "mysql",
//     connectionLimit : 10
// });
// const host = 'osha60dt.beget.tech';
// const user = 'osha60dt_test';
// const database = 'osha60dt_test';
// const password = '147258369A-a';


//NEW CONNECTION

const connection = mysql.createConnection({
    host: host,
    user: user,
    database: database,
    password: password,
    connectionLimit : 10
});

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Connected landed')
//     }
// });




module.exports = connection;




