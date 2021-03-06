const express = require('express');
const mysql = require('mysql');
const router = require('./router');
const app = express();
const moment = require('moment');

app.locals.moment = moment;

const PORT = process.env.PORT || 5000;

const dbConfig = require('./config/dbConfig');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

pool.getConnection((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.pool = pool;

//middleware
app.set('port', process.env.PORT || PORT); // set express to use our port
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs'); //configure view engine
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
