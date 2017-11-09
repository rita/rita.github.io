// What user are we using?
var dribbbleUsername = 'jimniels';

// Variable to hold the HTML we'll generate
var html = '';

// Load the shots via Dribbble's API
$.getJSON("http://api.dribbble.com/players/" + dribbbleUsername + "/shots?callback?", function(data) {
	// Do something with the result here
});

// how many shots we're displaying on the page
var numberOfShots = 10;

for (i=0; i<numberOfShots; i++) {
	html += '<li>';
	html += '<a href="' + data.shots[i].url + '">';
	html += '<img src="' + data.shots[i].image_url + '" alt="'+ data.shots[i].title +'" />';
}