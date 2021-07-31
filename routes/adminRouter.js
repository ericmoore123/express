const express = require('express');
const adminRouter = express.Router();

const router = (nav) => {
    adminRouter.route('/')
        .get((req, res) => {
            res.send("Inserting Books!");
        });
    return adminRouter;
}

module.exports = router;