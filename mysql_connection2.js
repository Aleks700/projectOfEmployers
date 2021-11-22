const mysql = require('mysql2');

const host = '127.0.0.1';
const user = 'root';
const database = 'employers';
const password = '123456789';

const connection = mysql.createConnection({
    host,
    user,
    database,
    password
});

connection.connect((err)=>{
    if(err){
        return console.log("Error"+err.message);
    }else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});


connection.query("SELECT * FROM clients_new",(err,results, fields)=>{
    console.log(results);
    // console.log(fields);
});

connection.end();