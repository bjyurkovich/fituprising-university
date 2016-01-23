(function() {

var LandingController = function($scope, dbg ) {
	dbg.p("---> in LandingController");

	$scope.onAboutTabClick = function() {
		$scope.overviewText = $scope.text.about;	
	}
	$scope.onFocuesTabClick = function() {
		$scope.overviewText = $scope.text.focus;	
	}
	$scope.onCourseTabClick = function() {
		$scope.overviewText = $scope.text.course;
	}

	$scope.text = {
		"about" : "about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about",
		"focus" : "focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus focus",
		"course" : "course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course course ",

	}

	$scope.overviewText = $scope.text.about;


};

// register controller in the module
fitupU.controller("LandingController", LandingController);

}());