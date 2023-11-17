const express = require("express");
const penguins = require("../penguins");

const router = express.Router();

router.get("/penguins", (req, res) => {
    res.json(penguins.list());
});

router.get("/penguins/:id", (req, res) => {
    res.json(penguins.get(req.params.id));
});

router.post("/penguins", (req, res) => {
    res.json(penguins.add(req.body));
});

router.delete("/penguins/:id", (req, res) => {
    res.json(penguins.delete(req.params.id));
})

module.exports = router;