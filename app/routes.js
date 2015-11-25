var fs = require('fs');
var read = require('fs-readdir-recursive');
var path = require('path');
var probe = require('node-ffprobe');
var config = require('../config.json');
var videoDir = config.videoDir;//'/video/';

module.exports = function(app) {
	// api ---------------------------------------------------------------------
	// get all 
	app.get('/api/video', function(req, res) {

		var videoFile = path.resolve(videoDir + req.query.file);
		//get video file metadata
		console.log("getting metadata for: "+videoFile+"\n");
		probe(videoFile, function(err, probeData) {
    			console.log(probeData);
		});
		res.sendFile(videoFile); 
	});

	// get list of all videos
	app.get('/api/videos', function(req, res) {

		var files = read(videoDir);
		res.send(files);
	});

	

	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		//console.log("here we are2");
		res.sendFile('./public/index.html', { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
	});
};
