const express = require("express");

const pgpController = require("../controllers/pgp.controller");
const pgpRouter = express.Router();

pgpRouter.get("/", pgpController.sendIndex);

module.exports = pgpRouter;