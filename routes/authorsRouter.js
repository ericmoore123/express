const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const authorRouter = (nav, pageData) => {

    // Renderer function to return page data object 
    const renderer = (result) =>{ 
        return {
            title: pageData.title,
            nav,
            authors: result.recordset
        };  
    };

    // Request file object reference
    const request = new mssql.Request();

    // Author routes
    router.get('/', async (req, res) => { 
        const result = await request.query('select * from books where title = author');
        res.render('authors', renderer(result));
    });

    router.get('/:id', async (req, res) => {
        const { id } = req.params; //get id from url (destructured)

        const result = await request.query(`select * from books where id = ${id}`)
        // console.log(result.recordset);
        res.render('author', renderer(result));
    });

    return router;
};

// Export authorRouter file as function module
module.exports = authorRouter;
