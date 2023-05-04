const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 80;

const season = {
	number: 3,
};

const axios = require("axios");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
	let players = {
		p9bug: "",
		panotherslime: "",
		pfurnace107: "",
		pgravityace: "",
		plewolfyt: "",
		ppatrick: "",
		pobugx2x: "",
		psid: "",
		pthomasx87x: "",
		ptriplepear: "",
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
				if (list[i].name_clean == "GravityAce")
					players.pgravityace = "•";
				if (list[i].name_clean == "LeW0lfYT") players.plewolfyt = "•";
				if (list[i].name_clean == "obugx2x") players.pobugx2x = "•";
				if (list[i].name_clean == "SearCorgi4955")
					players.ppatrick = "•";
				if (list[i].name_clean == "SidGames5") players.psid = "•";
				if (list[i].name_clean == "Thomasx87x")
					players.pthomasx87x = "•";
				if (list[i].name_clean == "TriplePear")
					players.ptriplepear = "•";
			}
		})
		.catch((err) => console.log(err));

	res.render("index", {
		seasonNumber: season.number,
		p9bug: players.p9bug,
		panotherslime: players.panotherslime,
		pfurnace107: players.pfurnace107,
		pgravityace: players.pgravityace,
		plewolfyt: players.plewolfyt,
		ppatrick: players.ppatrick,
		pobugx2x: players.pobugx2x,
		psid: players.psid,
		pthomasx87x: players.pthomasx87x,
		ptriplepear: players.ptriplepear,
	});
});

app.get("/streamday/", (req, res) => {
	res.render("streamday/index");
});

app.get("/maps", (req, res) => {
	res.sendStatus(501);
});

app.listen(port, "0.0.0.0");
