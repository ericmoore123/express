const express = require('express');
const router = express.Router();

const pageData = {
    'title': 'Express & NodeJS Reference Application',
    'welcomeInfo': 'Welcome to my Express and NodeJS project landing page. This page uses PugJS for its HTML templating engine.'
};

router.get('/', (req, res) => {  //I am going to render a view called "index", pass that 'index' file an object
    res.render('index', { 
        title: pageData.title,
        welcome: pageData.welcomeInfo,
        list: ['Item 1', 'Item 2']
    });
});

router.get('/home', (req, res) => { 
    res.render('home', {
        title: 'home'
    });
});

module.exports = router;