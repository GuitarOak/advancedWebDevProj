const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const db = require('./db/database.js');

// Get all stores
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM Stores';
    db.query(sql, (error, results) => {
        if (error) throw error;
      /*  for (let index = 0; index < results.length; index++) {
            const element = results[index];
            console.log(element.name)
        }
        res.json(results);*/
        res.render('stores', {stores: results})
    });
});

// Get a single store by ID
router.get('/stores/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Stores WHERE id = ?';
    db.query(sql, [id], (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
});

// Get a single store by name
router.get('/stores/:name', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Stores WHERE name = ?';
    db.query(sql, [id], (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
});


// Add a new store
router.post('/stores', (req, res) => {
    const { name, url, district } = req.body;
    const sql = 'INSERT INTO Stores (name, url, district) VALUES (?, ?, ?)';
    db.query(sql, [name, url, district], (error, results) => {
        if (error) throw error;
        res.status(201).send('Store added');
    });
});

// Update a store
router.put('/stores/:id', (req, res) => {
    const { id } = req.params;
    const { name, url, district } = req.body;
    const sql = 'UPDATE Stores SET name = ?, url = ?, district = ? WHERE id = ?';
    db.query(sql, [name, url, district, id], (error, results) => {
        if (error) throw error;
        res.send('Store updated');
    });
});

// Delete a store
router.delete('/stores/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Stores WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) throw error;
      res.send('Store deleted');
    });
  });

module.exports = router;
