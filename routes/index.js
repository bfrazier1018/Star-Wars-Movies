var moviesJSON = require('../movies.json');

// Home Page
exports.home = (req, res) => {

	var movies = moviesJSON.movies;

	res.render('home', {
		title : "Star Wars Movies",
		movies : movies 
	});
};

// Movie Single Page
exports.movie_single = (req, res) => {
	var episode_number = req.params.episode_number;
	res.send("This is the page for episode " + episode_number);
};

// Not Found Routes
exports.notFound = (req, res) => {
	res.send("404 Page Not Found");
};