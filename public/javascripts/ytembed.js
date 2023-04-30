var reqURL =
	"https://api.rss2json.com/v1/api.json?rss_url=" +
	encodeURIComponent("https://www.youtube.com/feeds/videos.xml?playlist_id=");
function loadVideo(iframe) {
	$.getJSON(reqURL + iframe.getAttribute("cid"), function (data) {
		var videoNumber = iframe.getAttribute("vnum")
			? Number(iframe.getAttribute("vnum"))
			: 0;
		console.log(data.items.length - videoNumber);
		var link = data.items[videoNumber].link;
		id = link.substr(link.indexOf("=") + 1);
		iframe.setAttribute(
			"src",
			"https://youtube.com/embed/" + id + "?controls=0&autoplay=1"
		);
	});
}
var iframes = document.getElementsByClassName("latestVideoEmbed");
for (var i = iframes.length, len = 0; i > len; i--) {
	loadVideo(iframes[i]);
}
