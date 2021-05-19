const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Hello, World!', welcome: 'Welcome to my Express and NodeJS project landing page. This page uses PugJS for its HTML templating engine.' }); //I am going to render a view called "index", pass that 'index' file an object
})

module.exports = router;