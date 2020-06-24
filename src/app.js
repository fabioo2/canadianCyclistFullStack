const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 5000;

const router = require('./router');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bicycle_canada',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//middleware
app.set('port', process.env.port || port); // set express to use our port
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs'); //configure view engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse form data client
app.use(fileUpload()); // probably won't need this but what the hey

app.use('/', router);
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
