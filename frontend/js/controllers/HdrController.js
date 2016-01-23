(function() {

var HdrController = function($scope, $location, dbg ) {
	dbg.p("---> in HdrController");

	// Header menus and routes
	$scope.menuSelIdx = 0;
	$scope.hrdMenu = [ 
		{  "text"  : "home",    "route" : "" },
		{  "text"  : "course", "route" : "course" },
		{  "text"  : "login",   "route" : "login" },
		{  "text"  : "pay",     "route" : "payment"}];

	gotoDefaultMenu = function () {
		$scope.menuSelIdx = 0;
		$location.path($scope.hrdMenu[$scope.menuSelIdx].route);
	}
	gotoDefaultMenu();

	$scope.onLogoClick = function() {
		gotoDefaultMenu();
	}

	$scope.onMenuClick = function(idx) {
		if ( idx === $scope.menuSelIdx )
			return;
		$scope.menuSelIdx = idx;
		$location.path($scope.hrdMenu[idx].route);
	}
};

// register controller in the module
fitupU.controller("HdrController", HdrController);

}());