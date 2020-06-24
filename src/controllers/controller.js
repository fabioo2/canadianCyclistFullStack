exports.renderHomePage = (req, res) => {
    let sql = 'SELECT * FROM `posts` ORDER BY id ASC';

    //execute query
    db.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            posts: result,
        });
    });
};
