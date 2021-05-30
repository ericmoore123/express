const express = require('express');
const router = express.Router();

const pageData = {
    'title': 'Express & NodeJS Reference Application - Library',
    'welcomeInfo': 'Welcome to my Express and NodeJS project landing page. This page uses PugJS for its HTML templating engine.'
};

const bookRouter = (nav) => {
    const bookList = require('../src/bookList');

    // /books is the baseline route
    router.get('/', (req, res) => {
        res.render('books', {
            title: pageData.title,
            nav,
            bookList
        });
    });

    router.get('/:id', (req, res) => {
        const { id } = req.params; //get id from url (destructured)
        res.render('book', {
            title: pageData.title,
            nav,
            book: bookList[id]
        });
    });
    
    return router;
};


module.exports = bookRouter;