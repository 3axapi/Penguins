const express = require("express");
const app = express();
const penguins = require("./penguins");
const api = require("./api");

app.use(express.json());
app.use("/api", api);

app.get("/", (req, res) => {
    res.send("ok")
});

app.listen(8080, () => console.log("serwer na 8080"));