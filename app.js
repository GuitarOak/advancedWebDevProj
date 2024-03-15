const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const stores = require("./stores.json");
const importStores = require("./db/importStores.js");
importStores.createTableIfNotExists();

app.use(express.json());
app.use(express.static("public"));

const storeRoutes = require("./routing.js");

app.use(storeRoutes);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
