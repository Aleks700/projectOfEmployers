const express  = require('express');
const mysql = require('./mysql_connection');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const { resolveMx } = require('dns');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

console.log(mysql);
mysql.connect();
app.use(express.static('client/build'));




app.get('/api',  (req,res)=>{
    
    mysql.query(`SELECT * FROM CLIENTS_NEW`, (err,row,fields)=>{
    res.json(row);
   
    });
    
});

app.get('/user/',  (req,res)=>{

    const query=`SELECT * FROM CLIENTS_NEW WHERE Id=${req.query.Id}`;
    // res.send(req.query.max);
    mysql.query(query, (err,row,fields)=>{
    //    if(err){}
    //    res.send('good');
    res.send(row);
   
    });
    
});


app.get('/',  (req,res)=>{
    res.send('server running');
});









app.post('/api',  (req,res)=>{

    console.log(req.body);
    
    mysql.query(`INSERT INTO CLIENTS_NEW( NAME, POSITION, IP, ENTER_POINT, СABINET, DEPARTMENT,DESCTOP,MONITOR,PRINTER,FLOOR) VALUES("${req.body.NAME}","${req.body.POSITION}","${req.body.IP}","${req.body.ENTER_POINT}","${req.body.CABINET}","${req.body.DEPARTMENT}","${req.body.DESCTOP}","${req.body.MONITOR}","${req.body.PRINTER}","${req.body.FLOOR}");`);
    
 
    console.log('Успешно');
    






});




app.delete('/api',  async (req,res)=>{
    
      await mysql.query(`DELETE FROM CLIENTS_NEW WHERE Id=${req.body.Id}`, (err,row,fields)=>{
        console.log('КЛиент  был удален из базы');
        // res.send(`Удален ${req.body.Id}`);
    });
    
    
});



app.put('/api/edit',  (req,res)=>{
    
    
    // res.send(req.body.Id);

    // mysql.query(`UPDATE CLIENTS_NEW SET NAME='${req.body.NAME}', POSITION="${req.body.POSITION}",IP=${req.body.IP}, ENTER_POINT=${req.body.POINT}, DESCTOP=${req.body.DESCTOP}, СABINET=${req.body.СABINET}, MONITOR=${req.body.MONITOR}, PRINTER="${req.body.PRINTER}, DEPARTMENT="${req.body.DEPARTMENT}" WHERE Id=${req.body.Id};`, (err,row,fields)=>{
    // mysql.query(`UPDATE CLIENTS_NEW SET NAME='${req.body.NAME}', POSITION="${req.body.POSITION}" WHERE Id=${req.body.Id};`, (err,row,fields)=>{
    mysql.query(`UPDATE CLIENTS_NEW SET NAME='${req.body.NAME}', ENTER_POINT='${req.body.ENTER_POINT}',  POSITION='${req.body.POSITION}', IP='${req.body.IP}', DESCTOP='${req.body.DESCTOP}', СABINET='${req.body.СABINET}', MONITOR='${req.body.MONITOR}', PRINTER="${req.body.PRINTER}", DEPARTMENT="${req.body.DEPARTMENT}" WHERE Id=${req.body.Id};`, (err,row,fields)=>{
        console.log(`Клиент обновлен ${req.body.NAME}`);
        res.send(`UPDATED  new${req.body.Id},${req.body.NAME}`);
    });
    
    
});






app.listen(8000,()=>{
    console.log('listening 4000');
})




