const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 80;

const season = {
	number: 5,
	applink:
		"https://docs.google.com/forms/d/e/1FAIpQLSdsrLXAlBXydOyFJwyZXrMKnwp-S5yzJlPRVuI2n1CLstbYcg/viewform",
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
		pgentlellama: "",
		p4487: "",
		pwally: "",
		pdonk: "",
		pfreak: "",
		pmlt: "",
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
				if (list[i].name_clean == "GravityAce") players.pfrance107 = "•";
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
				if (list[i].name_clean == "GentleLlama7037") players.pgentlellama = "•";
				if (list[i].name_clean == "4487") players.p4487 = "•";
				if (list[i].name_clean == "WallyWallerson") players.pwally = "•";
				if (list[i].name_clean == "sayWHAAAAAAAT") players.pfreak = "•";
				if (list[i].name_clean == "Donk__") players.pdonk = "•";
				if (list[i].name_clean == "CANDICE9502") players.pmlt = "•";
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
		pgentlellama: players.pgentlellama,
		pwally: players.pwally,
		p4487: players.p4487,
		pdonk: players.pdonk,
		pfreak: players.pfreak,
		pmlt: players.pmlt,
	});
});

app.get("/streamday/", (req, res) => {
	res.render("streamday/index");
});

app.get("/maps", (req, res) => {
	res.render("maps/index");
});

app.get("/maps/s1", (req, res) => {
	console.log(req.path);
	res.sendFile(__dirname + "/maps/s1.zip");
});

app.get("/maps/s2", (req, res) => {
	console.log(req.path);
	res.sendFile(__dirname + "/maps/s2.zip");
});

app.get("/maps/s3", (req, res) => {
	console.log(req.path);
	res.sendFile(__dirname + "/maps/s3.zip");
});

app.get("/maps/s4", (req, res) => {
	console.log(req.path);
	res.sendFile(__dirname + "/maps/s4.zip");
});

app.get("/apply", (req, res) => {
	res.render("form-redirect", {
		sn: season.number,
		link: season.applink,
	});
});

app.get("/application", (req, res) => {
	res.render("form-redirect", {
		sn: season.number,
		link: season.applink,
	});
});

app.get("/join", (req, res) => {
	res.render("form-redirect", {
		sn: season.number,
		link: season.applink,
	});
});

app.get("/play", (req, res) => {
	res.render("form-redirect", {
		sn: season.number,
		link: season.applink,
	});
});

app.get("/players/4487", (req, res) => {
	renderPlayer("4487", res);
});

app.get("/players/anotherslime", (req, res) => {
	renderPlayer("anotherslime", res);
});

app.get("/players/arent_itfunny", (req, res) => {
	renderPlayer("arent_itfunny", res);
});

app.get("/players/boredlake", (req, res) => {
	renderPlayer("boredlake", res);
});

app.get("/players/dolphindot", (req, res) => {
	renderPlayer("dolphindot", res);
});

app.get("/players/furnace107", (req, res) => {
	renderPlayer("furnace107", res);
});

app.get("/players/gentlellama7037", (req, res) => {
	renderPlayer("gentlellama7037", res);
});

app.get("/players/gravityace", (req, res) => {
	renderPlayer("gravityace", res);
});

app.get("/players/sidgames5", (req, res) => {
	renderPlayer("sidgames5", res);
});

app.get("/players/thomasx87x", (req, res) => {
	renderPlayer("thomasx87x", res);
});

app.get("/players/triplepear", (req, res) => {
	renderPlayer("triplepear", res);
});

app.get("/players/wallywallerson", (req, res) => {
	renderPlayer("wallywallerson", res);
});

const playerBios = {
	bio_4487: "This player has not set a bio yet.",
	bio_anotherslime: "This player has not set a bio yet.",
	bio_arentitfunny: "This player has not set a bio yet.",
	bio_boredlake: "This player has not set a bio yet.",
	bio_dolphindot: "This player has not set a bio yet.",
	bio_furnace107: "This player has not set a bio yet.",
	bio_gentlellama7037: "This player has not set a bio yet.",
	bio_gravityace: "This player has not set a bio yet.",
	bio_sidgames5: "This player has not set a bio yet.",
	bio_thomasx87x: "This player has not set a bio yet.",
	bio_triplepear: "This player has not set a bio yet.",
	bio_wallywallerson: "This player has not set a bio yet.",
	bio_untitled_freak: "This player has not set a bio yet.",
	bio_midlifetexas48: "This player has not set a bio yet.",
};

function renderPlayer(player, res) {
	res.render("players/" + player, playerBios);
}

app.listen(port, "0.0.0.0");
