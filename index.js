const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));


const storeRoutes = require('./routing.js'); 

app.use(storeRoutes);
app.set('view engine', 'ejs');


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
