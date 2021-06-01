const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const pageData = {
    'title': 'Express & NodeJS Reference Application - Library',
};

const authorRouter = (nav) => {

    router.get('/', (req, res) => { 
        const request = new mssql.Request();
        request.query('select * from books')
        .then((result) => {
            res.render('authors', {
                nav,
                title: pageData.title,
                authors: 'Hello'
            });
        });
    });

    router.get('/:id', (req, res) => {
        res.render('author', {
            nav,
            title: pageData.title,
            authors: ['Hello']
        });
    });

    return router;
}

module.exports = authorRouter;
