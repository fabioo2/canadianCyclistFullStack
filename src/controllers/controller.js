//Daily News GET ALL
exports.renderHomePage = (req, res) => {
    let sql =
        'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u where c.author_id = u.uid order by creation_date desc limit 30';
    //execute query
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            title: 'Canadian Cyclist',
            posts: result,
        });
    });
};

//Daily News GET ONE

exports.renderArticlePage = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u where c.author_id = u.uid and c.id = ${id} order by creation_date desc limit 30`;

    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('post.ejs', {
            title: 'Canadian Cyclist',
            posts: result,
        });
    });
};

//Beer's page GET ALL
exports.renderBeersPage = (req, res) => {
    let sql = 'select * from cc_beer limit 25';
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('beers.ejs', {
            title: 'Canadian Cyclist | Beers',
            posts: result,
        });
    });
};

//Women's page GET
exports.renderWomensPage = (req, res) => {
    res.render('womenscycling.ejs', {
        title: "Canadian Cyclist | Women's Cyclists",
    });
};

//Photo's page GET
exports.renderPhotosPage = (req, res) => {
    res.render('photos.ejs', { title: 'Canadian Cyclist | Photos' });
};

//create GET
exports.renderCreatePage = (req, res) => {
    res.render('create.ejs', { title: 'Canadian Cyclist | Create New Post' });
};

//create Table
// exports.createTable = (req, res) => {
//     let sql =
//         'CREATE TABLE posts2 (id int AUTO_INCREMENT, author VARCHAR(255), title VARCHAR(255), content text, date DATE, Primary Key (Id))';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('posts2 Table created');
//     });
// };

// //create POST
// exports.createPost = (req, res) => {
//     let message = '';
//     let author = req.body.author;
//     let title = req.body.title;
//     let content = req.body.content;
//     let date = req.body.date;

//     let sql = `INSERT INTO posts (author, title, content, date) VALUES ('${author}', '${title}', '${content}', '${date}')`;

//     db.query(sql, (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.redirect('/');
//     });
// };
