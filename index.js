const express = require("express");
const app = express();
const port = 4500;
const path = require('path');

app.get("/", (req, res) => {
    res.send("This is home");
});

app.get("/about", (req, res) => {
    const filePath = path.join(__dirname, "about.html");
    res.sendFile(filePath);
});

app.get("/contact", (req, res) => {
    const filePath = path.join(__dirname, "contact.html");
    res.sendFile(filePath);
});

app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log('App is up at: ', 'http://localhost:4500/');
});
