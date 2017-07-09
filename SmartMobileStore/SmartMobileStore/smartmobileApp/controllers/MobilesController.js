(function (app) {
	
	var mobileController = function ($scope, mobileService,$timeout) {

		var init = function () {
			$scope.mobiles = mobileService.getMobiles();
		}

		$scope.selectMobile = function (mobile) {

			for (var i = 0; i < $scope.mobiles.length; i++) {
				$scope.mobiles[i].approved = false;
			}
			mobile.approved = !mobile.approved;
			if (mobileService.selectMobile(mobile.modelId)) {
				$scope.status = 'You have made great decision';
				$timeout(
					function () {
						$scope.status = null;
					}, 1000
				);
			}
		};

		init();
		
	};

	app.controller("MobilesController", ["$scope","mobileService","$timeout", mobileController]);

}(angular.module("smartmobileModule")));