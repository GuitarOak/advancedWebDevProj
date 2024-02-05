const express = require("express");
const app = express();
const port = 3000;
const stores = require("./stores.json");
const db = require('./db/database.js')
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/stores", (req, res) => {
  res.json(stores);
});

app.get("/stores/:name", (req, res) => {
  const storeName = req.params.name;
  const store = stores.find(
    (s) => s.name.toLowerCase() === storeName.toLowerCase()
  );

  if (store) {
    res.json(store);
  } else {
    res.status(404).send("Item not found");
  }
});

app.get("/stores/district/:districtName", (req, res) => {
  const districtName = req.params.districtName;
  const filteredStores = stores.filter(
    (store) =>
      store.district &&
      store.district.toLowerCase() === districtName.toLowerCase()
  );

  if (filteredStores.length) {
    res.json(filteredStores);
  } else {
    res.status(404).send("No stores found in this district");
  }
});

app.post("/stores", (req, res) => {
  const newStore = req.body;
  stores.push(newStore);
  res.status(201).send("Store added");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
