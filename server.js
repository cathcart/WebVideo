// set up ======================================================================
var config = require('./config.json')
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = config.port; 				// set the port

// configuration ===============================================================
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
