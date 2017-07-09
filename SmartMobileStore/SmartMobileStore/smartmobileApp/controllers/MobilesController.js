(function (app) {
	
	var mobileController = function ($scope, mobileService,$timeout) {

		var onSuccess = function (response) {
			$scope.mobiles = response.data;
		}

		var onError = function () {
			alert("Error!");
		}

		var init = function () {
			$scope.mobiles = mobileService.getMobiles().then(onSuccess, onError);
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