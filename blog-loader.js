$(document).ready( function () {
	$.getJSON("http://kittensandcode.blogspot.co.uk/feeds/posts/default?alt=json&callback=?", function (data) {
		$('#blog-content').text(data.feed.entry[0].title.$t);
	})
});