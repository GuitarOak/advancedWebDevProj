const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const db = require('./db/database.js');

router.get('/', (req, res) => {
    res.render('index')
});
router.get('/stores', (req, res) => {
    res.render('stores')
});

router.get('/api/stores', (req, res) => {
    const sql = 'SELECT * FROM Stores';
    db.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
