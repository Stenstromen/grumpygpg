const model = require("../models/pgp.models");

function sendIndex(req, res) {
    res.end();
}

module.exports = {
    sendIndex,
}