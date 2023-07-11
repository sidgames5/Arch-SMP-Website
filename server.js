const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 80;

const season = {
	number: 4,
};

const axios = require("axios");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
	let players = {
		p9bug: "",
		panotherslime: "",
		pfurnace107: "",
		pfrance107: "",
		plewolfyt: "",
		ppatrick: "",
		pobugx2x: "",
		psid: "",
		pthomasx87x: "",
		ptriplepear: "",
		parent: "",
		pbored: "",
		pdolphin: "",
	};

	await axios
		.get(`https://api.mcstatus.io/v2/status/java/${process.env.IP}`)
		.then((res) => {
			let list = res.data.players.list;

			for (let i = 0; i < list.length; i++) {
				if (list[i].name_clean == "9bug") players.p9bug = "•";
				if (list[i].name_clean == "AnotherSlime")
					players.panotherslime = "•";
				if (list[i].name_clean == "Furnace107")
					players.pfurnace107 = "•";
				if (list[i].name_clean == "France107") players.pfrance107 = "•";
				if (list[i].name_clean == "LeW0lfYT") players.plewolfyt = "•";
				if (list[i].name_clean == "obugx2x") players.pobugx2x = "•";
				if (list[i].name_clean == "SearCorgi4955")
					players.ppatrick = "•";
				if (list[i].name_clean == "SidGames5") players.psid = "•";
				if (list[i].name_clean == "Thomasx87x")
					players.pthomasx87x = "•";
				if (list[i].name_clean == "TriplePear")
					players.ptriplepear = "•";
				if (list[i].name_clean == "Arent_itFunny") players.parent = "•";
				if (list[i].name_clean == "boredlake") players.pbored = "•";
				if (list[i].name_clean == "dolphindot") players.pdolphin = "•";
			}
		})
		.catch((err) => console.log(err));

	res.render("index", {
		seasonNumber: season.number,
		p9bug: players.p9bug,
		panotherslime: players.panotherslime,
		pfurnace107: players.pfurnace107,
		pfrance107: players.pfrance107,
		plewolfyt: players.plewolfyt,
		ppatrick: players.ppatrick,
		pobugx2x: players.pobugx2x,
		psid: players.psid,
		pthomasx87x: players.pthomasx87x,
		ptriplepear: players.ptriplepear,
		parent: players.parent,
		pbored: players.pbored,
		pdolphin: players.pdolphin,
	});
});

app.get("/streamday/", (req, res) => {
	res.render("streamday/index");
});

app.get("/maps", (req, res) => {
	console.log(__dirname + "/views/maps/season/1.zip");
	res.render("maps/index");
});

app.get("/maps/season1", (req, res) => {
	console.log(__dirname + "/views/maps/season/1.zip");
	res.sendFile(__dirname);
});

app.listen(port, "0.0.0.0");
