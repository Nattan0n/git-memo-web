const path = require('path');
const express = require('express');
const rootDir = require('../uti/path');
const router = express.Router();
const db = require('../db');

const { addToMem } = require('./memoManage');

router.get('/create', (req, res, next) => {
    res.render('create' , {docTitle: 'Create'});
});

router.post('/create', async (req, res, next) => {
    const { title, body } = req.body;
    await db.query('INSERT INTO memo (memo_title, memo_body) VALUES ($1, $2)', [title, body]);
    console.log('Created')
    res.redirect('/');
});

module.exports = router;