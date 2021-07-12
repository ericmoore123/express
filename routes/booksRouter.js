const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const pageData = require('../public/data/staticData');

const bookRouter = (nav) => {
    // const bookList = require('../src/bookList'); //STATIC CONTENT
    const request = new mssql.Request();

    // /books IS THE BASELINE ROUTE
    router.get('/', async (req, res) => { 

            const result = await request.query('select * from books')
             // console.log(result);
             res.render('books', {
                title: pageData.title,
                nav,
                books: result.recordset
            });
    });

    router.get('/:id', async (req, res) => {
        const { id } = req.params; //get id from url (destructured)

            const result = await request.query(`select * from books where id = ${id}`)
            // console.log(result.recordset);
            res.render('books', {
                title: pageData.title,
                nav,
                books: result.recordset
            });
    });
    
    return router;
};


module.exports = bookRouter;
