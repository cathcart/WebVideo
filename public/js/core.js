function CheckIfSuitable(value, index, ar){
	var ext = value.substring(value.length-3);
	//var possible = ["mp4","mkv"];
	//var possible = ["mp4"];
	var possible = ["mkv"];
	if (possible.indexOf(ext) > -1){
		return true;
		console.log(value+" true");
	}else{
		return false;
		console.log(value+" false");
	}
}

//angular.module("videoApp",[]);

angular.module("videoApp",['ngRoute']).config(function($routeProvider){
	$routeProvider
		.when('/list',{
		controller: 'mainCtrl',
		templateUrl: 'views/list.html'
	})
		.when('/player',{
		controller: 'videoCtrl',
		templateUrl: 'views/mkv.html'
	})
	.otherwise({redirectTo: '/list'});
});

angular.module("videoApp").controller("videoCtrl", ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.tmp = "/api/video?file=" + $routeParams.file;
	$scope.params = $routeParams;
}]);


angular.module("videoApp").controller("mainCtrl", ['$scope', 'videos', function($scope, videos) {
	videos.success(function(data){
		$scope.videos = data.filter(CheckIfSuitable); 
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
