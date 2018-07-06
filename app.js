var express = require('express');

var app = express();

// Set View Template
app.set('view engine', 'ejs');

// Import Routes Folder
var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Routes ----------

// Home Page
app.get('/', routes.home);

// Movie Single Page
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// Not Found Routes
app.get('*', routes.notFound);

// ---------- Port ---------- 
app.listen(3000, () => {
	console.log("The application is running on localhost:3000");
});