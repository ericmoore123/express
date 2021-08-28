const express = require('express');
// const mssql = require('mssql');
const debug = require('debug');

const authRouter = express.Router();
const router = () => {
    authRouter.route('/signUp')
        .post((req, res) => {
            debug(req.body);
        });
    return authRouter;
};

module.exports = router;
