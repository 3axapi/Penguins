const express = require("express");
const penguins = require("../penguins");

const router = express.Router();

router.get("/api/penguins", (req, res) => {
    res.json(penguins.list());
});

router.get("/api/penguins/:id", (req, res) => {
    res.json(penguins.get(req.params.id));
});

router.post("/api/penguins", (req, res) => {
    res.json(penguins.add(req.body));
});

module.exports = router;