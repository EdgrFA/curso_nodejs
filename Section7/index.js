const express = require("express");
const server = express();

const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get("/", getHomePage);

server.get("/about", (req, res) => {
    res.write(about);
});

server.listen(8080, () => {
    console.log("Server is running on port " + 8080);
});

function getHomePage(req,res){
    res.write(home);
}

// GET -> Reading
// POST -> Creat
// PUT -> Replace
// PATCH -> Replace only one property from an element
// DELETE -> Remove