const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const router = require('./router');
const app = express();
const moment = require('moment');
app.locals.moment = moment;

const PORT = process.env.PORT || 5000;

const dbConfig = require('./config/dbConfig');
const db = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//middleware
app.set('port', process.env.PORT || PORT); // set express to use our port
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs'); //configure view engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse form data client

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
