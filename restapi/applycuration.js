const express = require("express");
const app = express();
const penguins = require("./penguins");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ok")
});

app.get("/api/penguins", (req, res) => {
    res.json(penguins.list());
});

app.get("/api/penguins/:id", (req, res) => {
    res.json(penguins.get(req.params.id));
});

app.post("/api/penguins", (req, res) => {
    res.json(penguins.add(req.body));
})

app.listen(8080, () => console.log("serwer na 8080"));