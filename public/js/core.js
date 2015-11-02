function CheckIfMp4(value, index, ar){
	var ext = value.substring(value.length-3);
	//var possible = ["mp4","mkv"];
	var possible = ["mp4"];
	if (possible.indexOf(ext) > -1){
		return true;
		console.log(value+" true");
	}else{
		return false;
		console.log(value+" false");
	}
	//console.log(ext);
}

angular.module("videoApp",[]);

angular.module("videoApp").controller("mainCtrl", ['$scope', 'videos', function($scope, videos) {
	videos.success(function(data){
		$scope.videos = data.filter(CheckIfMp4); 
	});
}]);

angular.module("videoApp").factory('videos',['$http', function($http){
	return $http.get('/api/videos')
		.success(function(data){
			return data;
		})
		.error(function(err){
			console.log("failed to get video list");
			return err;
		});
}]);
