const express = require('express');
// const mssql = require('mssql');

const authRouter = express.Router();
const router = () => {
    authRouter.route('/signUp')
        .post((req, res) => {
            res.json(req.body);
        });
    return authRouter;
};

module.exports = router;
