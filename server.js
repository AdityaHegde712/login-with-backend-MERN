const express = require("express");
// Render ejs
const ejs = require("ejs");
const app = express();

app.get("/", (req, res) => {
    // Render ejs
    res.render("index.ejs");
});
