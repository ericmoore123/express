const express = require('express');
const router = express.Router();
const mssql = require('mssql');


const bookRouter = (nav, pageData) => {
    // const bookList = require('../src/bookList'); //STATIC CONTENT
    const request = new mssql.Request();

    // Baseline /book route
    router.get('/', async (req, res) => { 

            const result = await request.query('select * from books')
             // console.log(result);
             res.render('books', {
                title: pageData.title,
                nav,
                books: result.recordset
            });
    });

    // Individual Link click route
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

    // Search route
    router.post('/search', async (req, res) => {
        const {searchData} = req.body;
        // GET items where the books title contains search input
        const result = await request.query(`select * from books where title like ('%${searchData}%') `);
        
        res.render('books', {
            title: pageData.title,
            nav,
            books: result.recordset
        });

    });
    
    return router;
};


module.exports = bookRouter;
