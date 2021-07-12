const express = require('express');
const router = express.Router();
const mssql = require('mssql');

const pageData = require('../public/data/staticData');

const authorRouter = (nav) => {
    const request = new mssql.Request();

    router.get('/', async (req, res) => { 
        const result = await request.query('select * from books where title=author');
        res.render('authors', {
            nav,
            title: pageData.title,
            authors: result.recordset
        });
    });

    router.get('/:id', async (req, res) => {
        const { id } = req.params; //get id from url (destructured)

        const result = await request.query(`select * from books where id = ${id}`)
        // console.log(result.recordset);
        res.render('author', {
            title: pageData.title,
            nav,
            authors: result.recordset
        });
    });

    return router;
};

module.exports = authorRouter;
