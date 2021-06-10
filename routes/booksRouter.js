const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const pageData = require('../public/data/staticData');

const bookRouter = (nav) => {
    // const bookList = require('../src/bookList'); //STATIC CONTENT

    // /books IS THE BASELINE ROUTE
    router.get('/', async (req, res) => { 

            const request = new mssql.Request();
            const result = await request.query('select * from books')
             // console.log(result);
             res.render('books', {
                title: pageData.title,
                nav,
                books: result.recordset
            });
    });

    router.get('/:id', (req, res) => {
        const { id } = req.params; //get id from url (destructured)

        const request = new mssql.Request();
        request.query(`select * from books where id = ${id}`)
            .then((result) => {
                // console.log(result.recordset);
                res.render('books', {
                    title: pageData.title,
                    nav,
                    books: result.recordset
                });
            });
    });
    
    return router;
};


module.exports = bookRouter;
