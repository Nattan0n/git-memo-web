const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../db');
const dayjs = require('dayjs');
const { getAllMem } = require('./memoManage');


router.get('/', async (req, res, next) => {
    try {
        const result = await db.query(`SELECT memo_id, memo_title, memo_body, memo_createdat FROM memo`);
        const rows = result.rows;
        const allMem = getAllMem();

        const formattedResults = rows.map(row => {

            const createdatstr = dayjs(row.memo_createdat).format('DD/MM/YYYY HH:mm');
            return { ...row, createdatstr };
        });
        //console.log(formattedResults);
        res.render('home', { allMem: formattedResults });
    } catch (err) {
        console.error(err);
    }
    
});

module.exports = router;