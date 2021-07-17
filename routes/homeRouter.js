const express = require('express');
const router = express.Router();

const homeRouter = (nav, pageData) => {

    router.get('/', async (req, res) => { 
        res.render('home', {
            nav,
            title: pageData.title,
        });
    });

    return router;
};

module.exports = homeRouter;
