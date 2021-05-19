const express = require('express');
const router = express.Router();

const pageData = {
    'title': 'Express & NodeJS Reference Application',
    'welcomeInfo': 'Welcome to my Express and NodeJS project landing page. This page uses PugJS for its HTML templating engine.'
};

router.get('/', (req, res) => {
    res.render('index', { title: pageData.title, welcome: pageData.welcomeInfo }); //I am going to render a view called "index", pass that 'index' file an object
});

module.exports = router;