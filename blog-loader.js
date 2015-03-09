$(document).ready( function () {
	$.getJSON("https://www.googleapis.com/blogger/v3/blogs/1230791007767001499/posts?key=AIzaSyAD_gpKq2azxvP7_iejW8uU8ok6P6lWIjc", function (data) {
		console.log(data.items.content);
	})
});