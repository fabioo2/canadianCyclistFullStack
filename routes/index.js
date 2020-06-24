module.exports = {
    getHomePage: (req, res) => {
        let sql = 'SELECT * FROM `post` ORDER BY id ASC';

        //execute query
        db.query(sql, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                post: result,
            });
        });
    },
};
