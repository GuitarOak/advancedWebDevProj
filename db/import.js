const fs = require('fs');
const mysql = require('mysql');
const db = require('./database.js'); 

const importData = () => {
  fs.readFile('../stores.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    try {
      const stores = JSON.parse(data);

      stores.forEach(store => {
        const query = 'INSERT INTO Stores (name, url, district) VALUES (?, ?, ?)';
        const values = [store.name, store.url, store.district];

        db.query(query, values, (error, results, fields) => {
          if (error) {
            console.error("Error inserting data:", error);
            return;
          }
          console.log("Inserted data for store:", store.name);
        });
      });

    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });
};

importData();
