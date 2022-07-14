const express = require("express");
const bodyParser = require("body-parser");

const compression = require("compression");
const ejs = require("ejs");
const app = express();
const pgpRouter = require("./routers/pgp.router");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(compression());
app.use(pgpRouter);

app.listen(8080, () => {
    console.log("Server listening on localhost:8080")
})