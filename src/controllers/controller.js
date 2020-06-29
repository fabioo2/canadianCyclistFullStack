exports.renderHomePage = (req, res) => {
    let sql = 'SELECT * FROM `posts` ORDER BY id ASC';

    //execute query
    db.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            title: 'Canadian Cyclist',
            posts: result,
        });
    });
};

//create GET
exports.renderCreatePage = (req, res) => {
    res.render('create.ejs', { title: 'Canadian Cyclist | Create New Post' });
};

//create Table
exports.createTable = (req, res) => {
    let sql =
        'CREATE TABLE posts2 (id int AUTO_INCREMENT, author VARCHAR(255), title VARCHAR(255), content text, date DATE, Primary Key (Id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts2 Table created');
    });
};

//create POST
exports.createPost = (req, res) => {
    let message = '';
    let author = req.body.author;
    let title = req.body.title;
    let content = req.body.content;
    let date = req.body.date;

    let sql = `INSERT INTO posts (author, title, content, date) VALUES ('${author}', '${title}', '${content}', '${date}')`;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
};
