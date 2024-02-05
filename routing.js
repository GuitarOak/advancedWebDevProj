const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const db = require('./db/database.js');

// Get all stores
router.get('/stores', (req, res) => {
    const sql = 'SELECT * FROM stores';
    db.query(sql, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Get a single store by ID
router.get('/stores/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM stores WHERE id = ?';
    db.query(sql, [id], (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
});

// Add a new store
router.post('/stores', (req, res) => {
    const { name, url, district } = req.body;
    const sql = 'INSERT INTO stores (name, url, district) VALUES (?, ?, ?)';
    db.query(sql, [name, url, district], (error, results) => {
        if (error) throw error;
        res.status(201).send('Store added');
    });
});

// Update a store
router.put('/stores/:id', (req, res) => {
    const { id } = req.params;
    const { name, url, district } = req.body;
    const sql = 'UPDATE stores SET name = ?, url = ?, district = ? WHERE id = ?';
    db.query(sql, [name, url, district, id], (error, results) => {
        if (error) throw error;
        res.send('Store updated');
    });
});

// Delete a store
router.delete('/stores/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM stores WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) throw error;
      res.send('Store deleted');
    });
  });

module.exports = router;
