var reqURL =
	"https://api.rss2json.com/v1/api.json?rss_url=" +
	encodeURIComponent("https://www.youtube.com/feeds/videos.xml?playlist_id=");
function loadVideo(iframe) {
	$.getJSON(reqURL + iframe.getAttribute("cid"), function (data) {
		var videoNumber = iframe.getAttribute("vnum")
			? Number(iframe.getAttribute("vnum"))
			: 0;
		console.log(data.items.length - videoNumber);
		console.log(data.items);
		var link = data.items[data.items.length - videoNumber].link;
		id = link.substr(link.indexOf("=") + 1);
		iframe.setAttribute(
			"src",
			"https://youtube.com/embed/" + id + "?controls=0&autoplay=1"
		);
	});
}
var iframes = document.getElementsByClassName("latestVideoEmbed");
for (var i = 0, len = iframes.length; i < len; i++) {
	loadVideo(iframes[i]);
}
