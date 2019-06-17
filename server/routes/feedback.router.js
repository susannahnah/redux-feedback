const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('POST /');
    pool.query(
        `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`, 
    ).then(
        () => {
            console.log('YAY!!!!!!');
            res.sendStatus(201);
    }).catch((error) => {
            console.log('Error POST /', error);
            res.sendStatus(500);
    });
})


module.exports = router; 