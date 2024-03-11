const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const db = require('./db/database.js');


router.get('/', (req, res) => {
    res.render('index')
});

// Get all stores
router.get('/stores', (req, res) => {
    const sql = 'SELECT * FROM Stores';
    db.query(sql, (error, results) => {
        if (error) throw error;
        res.render('stores', {stores: results})
    });
});

module.exports = router;
