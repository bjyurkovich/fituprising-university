(function() {

var CourseController = function($scope, $location, dbg ) {
	dbg.p("---> in CourseController");



	// Overrview Info

	$scope.overview = [
		{
			"tabText"  : "About Dr. Drew",
			"infoText" : "Dr. Drew is a dynamic professional with expert level experience in sustainable weight loss. He is highly motivating and strikes an effective balance of knowledge and practical recommendations to help people transform. Dr. Drew went through is own personal journey of weight loss while sustaining a weight loss of 160 pounds. He has kept it off for years. He doesn't just rely on his personal experience. From hundreds of client's success stories, current research, and intense training Dr. Drew has learned a cutting edge and effective approach that is highly sustainable.  Dr. Drew earned a Doctorate of Psychology and received certification as a Certified Fitness Nutrition Specialist making him a unique and cutting edge professional in the field of weight loss." 
		},
		{
			"tabText"  : "Dr. Drew's Focus",
			"infoText" : "Dr. Drew takes you far beyond the limits of any diet! The problem is diets focus on limiting and Dr. Drew's antidote is focused on empowering. He is passionate about your health taking you to your potential and overcoming any limitations in your life. Dr. Drew teaches dynamic principles in a simplistic manner. He teaches how to overcome sugar cravings, beat night eating, and overcome negative relationships with food. Furthermore, Dr. Drew teaches how to make a significant lifestyle transformation through very simple steps. He even teaches you how to sleep better, conquer trigger food cravings, and find daily balance." 
		},
		{
			"tabText"  : "Course Information",
			"infoText" : "TBD" 

		}
	]

	$scope.selOvTabIdx = 0;
	$scope.overviewText = $scope.overview[0].infoText;	

	$scope.onAboutTabClick = function() {
		dbg.p("in onAboutTabClick");
		$scope.selOvTabIdx = 0;
		$scope.overviewText = $scope.overview[0].infoText;	
	}
	$scope.onFocuesTabClick = function() {
		dbg.p("in onFocuesTabClick");
		$scope.selOvTabIdx = 1;
		$scope.overviewText = $scope.overview[1].infoText;	
	}
	$scope.onCourseTabClick = function() {
		dbg.p("in onFocuesTabClick");
		$scope.selOvTabIdx = 2;
		$scope.overviewText = $scope.overview[2].infoText;	
	}

	// Course Info

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