var fs = require('fs');
var read = require('fs-readdir-recursive');
var path = require('path');
var videoDir = '/torrent';

module.exports = function(app) {
	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/video', function(req, res) {

		//var vid_path = req.query.path;
		var vid_file = path.resolve('/torrent/' + req.query.file);
		//console.log("here we are");
		//var requestedFile = path.resolve('/torrent/' + vid_path + vid_file);
  		//res.send(vid_path + ' ' + vid_file + '\n' + requestedFile); /*
  		//res.send(vid_file); 
		res.sendFile(vid_file); /*
		var requestedFile = path.basename(req.params.vid_id);
		console.log("request received:\t" + req.params.vid_id);
		console.log("looking for:\t" + requestedFile);
		//res.sendFile('/torrent/' + req.params.vid_id); 
		res.sendFile(requestedFile);*/
		//res.sendFile(req.params.vid_id, { root: "/torrent" }); 
		//res.sendFile("/torrent/test/test.mp4");
	});

	app.get('/api/users', function(req, res) {
  //var user_id = req.param('id');
  var user_id = req.query.id;
  //var token = req.param('token');
  var token = req.query.token;
  //var geo = req.param('geo');  
  var geo = req.query.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
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
