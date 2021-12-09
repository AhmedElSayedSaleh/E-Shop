import express from "express";
// import data from "./jewelry.js";
// import data from "./shoes.js";
// import data from "./bags.js";
// import { data } from "./data.json";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
