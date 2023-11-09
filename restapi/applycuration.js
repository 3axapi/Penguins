const express = require("express");
const app = express();
const penguins = require("./penguins");

app.get("/", (req, res) => {
    res.send("ok")
});

app.get("/api/penguins", (req, res) => {
    res.send(penguins.list())
})

app.listen("8080", () => console.log("serwer na 8080"));