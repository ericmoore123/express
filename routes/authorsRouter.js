const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const pageData = {
    'title': 'Express & NodeJS Reference Application - Library',
};

const authorRouter = (nav) => {

    router.get('/', (req, res) => { 
        const request = new mssql.Request();
        request.query('select * from books where title=author')
        .then((result) => {
            res.render('authors', {
                nav,
                title: pageData.title,
                authors: result.recordset
            });
        });
    });

    router.get('/:id', (req, res) => {
        const { id } = req.params; //get id from url (destructured)

        const request = new mssql.Request();
        request.query(`select * from books where id = ${id}`)
            .then((result) => {
                console.log(result.recordset);
                res.render('author', {
                    title: pageData.title,
                    nav,
                    authors: result.recordset
                });
            });
    });

    return router;
}

module.exports = authorRouter;
