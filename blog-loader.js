$(document).ready( function () {
	$.getJSON("https://www.googleapis.com/blogger/v3/blogs/1230791007767001499/posts", function (data) {
		console.log(data.items.content);
	})
});