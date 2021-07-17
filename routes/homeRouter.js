const express = require('express');
const router = express.Router();

const pageData = require('../public/data/staticData');

const homeRouter = (nav) => {

    router.get('/', async (req, res) => { 
        res.render('home', {
            nav,
            title: pageData.title,
        });
    });

    return router;
};

module.exports = homeRouter;
