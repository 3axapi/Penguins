const fs = require("fs");
const path = require("path");

const penguins = require("./penguinsDB");

function addPenguin (penguinData) {
    penguinData.id = getNextId();
    penguins.push(penguinData);
    save();

    return getPenguin(penguinData.id);
}

function copy (obj) {
    return JSON.parse(JSON.stringify(obj));
}

function listPenguins() {
    return copy(penguins);
}

function findPenguinById (idPenguin) {
    let id = +idPenguin;
    return penguins.find(p => p.id === id);
}

function getNextId () {
    let lastPenguin = penguins[penguins.length - 1];
    return lastPenguin ? lastPenguin.id + 1 : 1;
}

function getPenguin (isPenguin) {
    return copy(findPenguinById(isPenguin))
}

function save () {
    fs.writeFile(
        path.join(__dirname, "penguinsDB.json"),
        JSON.stringify(penguins, null, 4),
        err => {
            if (err) console.log("Błąd podczas zapisywania danych");
            else console.log("Plik został zapisany");
        }
    )
}

module.exports = {
    list: listPenguins,
    get: getPenguin,
    add: addPenguin
}