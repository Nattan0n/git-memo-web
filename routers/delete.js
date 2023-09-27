const path = require('path');
const express = require('express');
const rootDir = require('../uti/path');
const router = express.Router();
const db = require('../db');

// router.get('/:id', (req, res, next) => {
//     res.render('');
// });

router.post('/:memo_id', async (req, res, next) => {
    const memoId = req.params.memo_id;

    try {
        await db.query('DELETE FROM memo WHERE memo_id = $1', [memoId]);
        console.log('Deleted');
        res.redirect('/');
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;