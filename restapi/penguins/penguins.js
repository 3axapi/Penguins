const fs = require("fs");
const path = require("path");

const penguins = require("./penguinsDB");

function copy (obj) {
    return Object.assign({}, obj);
}

function listPenguins() {
    return copy(penguins);
}

module.exports = {
    list: listPenguins
}