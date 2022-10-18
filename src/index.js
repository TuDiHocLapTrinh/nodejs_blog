// import express from "express";
// import { engine, create, ExpressHandlebars } from "express-handlebars";
// import morgan from "morgan";
// import * as path from "path";
// import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

// console.log(__dirname);
app.use(express.static("src/public"));
// HTTP logger
//app.use(morgan("combined"));

//Template engine
//app.engine("hbs", handlebars({ extname: ".hbs" }));
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "src/resources/views");

app.get("/", (req, res) => {
  res.render("home", { showTitle: true });
});

app.get("/news", (req, res) => {
  console.log(req.query.q);
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
