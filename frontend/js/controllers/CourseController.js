(function() {

var CourseController = function($scope, $location, dbg ) {
	dbg.p("---> in CourseController");

	$scope.onWatchTabClick = function() {
		dbg.p("onWatchTabClick()");
	}
	$scope.onPreviewTabClick = function() {
		dbg.p("onPreviewTabClick()");		
	}


	$scope.modules = [
		{
			"title" : "10 Indispensable Guiding Principals",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Small Steps for Faster Sustainable Change",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"

		},
		{
			"title" : "6 Psycho-Physiological Skills To Take Back Control",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Create a Positive Relationship With Food",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Complete Food Awareness",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Blood Sugar, Mitochondria, and Hydration",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Sleep, Exercise, Nutrition - The 3 Fundamentals in Life!",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},	
		{
			"title" : "Overcoming Sugar",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		},
		{
			"title" : "Night Eating",
			"desc"  : "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd"
		}		
	]
};

// register controller in the module
fitupU.controller("CourseController", CourseController);

}());