const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const season = {
	number: 3,
};

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index", { seasonNumber: season.number });
});

app.get("/maps", (req, res) => {
	res.sendStatus(501);
});

app.listen(port);
