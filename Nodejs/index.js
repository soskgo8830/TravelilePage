var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('homePage.html')
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/login.html');
});
//mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '8830',
    database: 'workbench'
});

var sql ='SELECT * FROM workbench.user';
connection.query(sql,function(err,rows,fields){
    if(err){
        console.log(err);
    }
    else{
        console.log('rows',rows);
    }
});

//port open
app.listen(4000, function () {
    console.log("Express server has started on port 4000")
}); 