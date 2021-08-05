const express = require('express');
const router = express.Router();

const homeRouter = (nav, pageData) => {

    // Renderer function to return page data object 
    const renderer = () => { 
        return {
            title: pageData.title,
            nav
        };  
    };

    router.get('/', async (req, res) => { 
        res.render('home', renderer());
    });

    return router;
};

module.exports = homeRouter;
