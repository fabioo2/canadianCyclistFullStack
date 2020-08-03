//Daily News GET ALL
exports.renderHomePage = (req, res) => {
    let sql = 'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u where c.author_id = u.uid order by creation_date desc limit 30';
    let sql2 = 'select * from cc_banner where client_id = 4 and banner_position_id = 12';
    //execute query
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        pool.query(sql2, (err2, result2) => {
            if (err2) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'Canadian Cyclist',
                posts: result,
                ads: result2,
            });
        });
    });
};

//Daily News GET ONE
exports.renderArticlePage = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u where c.author_id = u.uid and c.id = ${pool.escape(id)} order by creation_date desc limit 30`;
    let sql2 = 'select * from cc_banner where client_id = 4 and banner_position_id = 12';

    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        pool.query(sql2, (err2, result2) => {
            if (err2) {
                res.redirect('/');
            }
            res.render('post.ejs', {
                title: 'Canadian Cyclist',
                posts: result,
                ads: result2,
            });
        });
    });
};

//Beer's page GET ALL
exports.renderBeersPage = (req, res) => {
    let sql = 'select * from cc_beer order by id desc limit 25';
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

//Women's News page GET ALL
exports.renderWomensPage = (req, res) => {
    let sql = 'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 3 order by creation_date desc limit 30';
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womenscycling.ejs', {
            title: "Canadian Cyclist | Women's Cyclists",
            posts: result,
        });
    });
};

//Womens News Article GET ONE

exports.renderWomensArticlePage = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 3 AND c.id = ${pool.escape(id)} order by creation_date desc limit 30`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womenspost.ejs', {
            title: "Canadian Cyclist | Women's Cyclists",
            posts: result,
        });
    });
};

//Women's Feature page GET ALL
exports.renderWomensFeaturePage = (req, res) => {
    let sql = 'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 17 order by creation_date desc limit 30';
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womensfeatures.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Featured",
            posts: result,
        });
    });
};

//Womens Featured Article GET ONE

exports.renderWomensFeatureArticle = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 17 AND c.id = ${pool.escape(id)} order by creation_date desc limit 30`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womenspost.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Featured",
            posts: result,
        });
    });
};

//Women's Reviews page GET ALL
exports.renderWomensReviewsPage = (req, res) => {
    let sql = 'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 27 order by creation_date desc limit 30';
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womensreviews.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Reviews",
            posts: result,
        });
    });
};

//Womens Review Article GET ONE

exports.renderWomensReviewsArticle = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 27 AND c.id = ${pool.escape(id)} order by creation_date desc limit 30`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womensposts.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Reviews",
            posts: result,
        });
    });
};

//Women's Resources page GET ALL
exports.renderWomensResourcesPage = (req, res) => {
    let sql = 'select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 16 order by creation_date desc limit 30';
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womensresources.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Resources",
            posts: result,
        });
    });
};

//Womens Resources Article GET ONE

exports.renderWomensResourcesArticle = (req, res) => {
    let id = req.params.id;
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u ON c.author_id = u.uid join cc_dailynews_category dc ON c.id = dc.cc_dailynews_id where category_id = 16 AND c.id = ${pool.escape(id)} order by creation_date desc limit 30`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('womenspost.ejs', {
            title: "Canadian Cyclist | Women's Cyclists Resources",
            posts: result,
        });
    });
};

//Photo's page GET
exports.renderPhotosPage = (req, res) => {
    let sql = 'select distinct year(date_from) as year_num from cc_event where year(date_from) >= 2005 order by year_num desc';

    //execute query
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('photos.ejs', {
            title: 'Canadian Cyclist',
            posts: result,
        });
    });
};

// Event's page GET for the given year
exports.renderEventPage = (req, res) => {
    let year_num = req.params.year_num;
    let sql = `select e.id, e.event_title, e.event_location, e.date_from, e.date_to, year(e.date_from) as year_num from cc_event e where year(e.date_from) = ${pool.escape(year_num)} group by e.id order by e.date_from desc`;
    let sql2 = `select s.id, s.cc_event_id, s.event_sub_category, e.event_title from cc_event_subcategory s join cc_event e where s.cc_event_id = e.id and year(e.date_from) = ${pool.escape(year_num)}`;
    //execute query
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        pool.query(sql2, (err2, result2) => {
            if (err2) {
                res.redirect('/');
            }
            res.render('event.ejs', {
                title: 'Canadian Cyclist',
                posts: result,
                types: result2,
            });
        });
    });
};

// Gallery's page GET for the given event
exports.renderGalleryPage = (req, res) => {
    let year_num = req.params.year_num;
    let event_id = req.params.event_id;
    let id = req.params.id;
    let sql = `select * from cc_photo p join cc_event_subcategory s join cc_event e where p.cc_event_subcategory_id = s.id and p.cc_event_id = e.id and year(e.date_from) = ${pool.escape(year_num)} and e.id = ${pool.escape(event_id)} and s.id = ${pool.escape(id)}`;
    let sql2 = `select s.id, s.cc_event_id, s.event_sub_category, e.event_title, year(e.date_from) as year_num from cc_event_subcategory s join cc_event e where s.cc_event_id = e.id and year(e.date_from) = ${pool.escape(year_num)} and e.id = ${pool.escape(event_id)}`;

    //execute query
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        pool.query(sql2, (err2, result2) => {
            if (err2) {
                res.redirect('/');
            }
            res.render('gallery.ejs', {
                title: 'Canadian Cyclist',
                posts: result,
                types: result2,
            });
        });
    });
};

//Search page GET

exports.renderSearchPage = (req, res) => {
    res.render('search.ejs', {
        title: 'Canadian Cyclist | Search',
    });
};

//Search page POST

exports.renderSearchResultsPage = (req, res) => {
    let year = req.body.yearSelect;
    let month = req.body.monthSelect;
    let search = req.body.searchInput.replace(/[,.]/g, '');
    let searchArray = search.split(' ');
    let searchWildCard = '';

    searchArray.forEach((search, index) => {
        if (index == searchArray.length - 1) {
            searchWildCard += `news_content LIKE '%${search}%'`;
        } else {
            searchWildCard += `news_content LIKE '%${search}%' AND `;
        }
    });

    console.log(searchWildCard);
    let sql = `select c.id, c.news_title, c.news_content, c.creation_date, u.username from cc_dailynews c join users u where c.author_id = u.uid AND MONTH(creation_date) LIKE ${pool.escape(month)} AND YEAR(creation_date) LIKE ${pool.escape(
        year
    )} AND ${searchWildCard} order by creation_date desc limit 50`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('searchresults.ejs', {
            title: 'Canadian Cyclist',
            search: search,
            posts: result,
        });
    });
};

//Classifieds GET

exports.renderClassifiedsPage = (req, res) => {
    res.render('classifieds.ejs', {
        title: 'Canadian Cyclist | Classifieds Search',
    });
};

//Classifieds POST

exports.renderClassifiedsResultsPage = (req, res) => {
    let category = req.body.category;
    let status = req.body.status;
    let search = req.body.searchInput;
    let searchWildcard = `%${req.body.searchInput}%`;
    let sql = `select c.id, c.class_title, c.class_content, c.class_name, c.class_email, c.class_phone, c.class_price, c.class_category_id, c.class_status_id, c.class_date, c.cc_status_id FROM cc_classifieds c where c.cc_status_id = 4 AND c.class_category_id LIKE ${pool.escape(
        category
    )} AND c.class_status_id LIKE ${pool.escape(status)} AND c.class_content LIKE ${pool.escape(searchWildcard)}
    order by class_date desc limit 50`;
    pool.query(sql, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('classifiedsresults.ejs', {
            title: 'Canadian Cyclist',
            search: search,
            posts: result,
        });
    });
};
