(function (app) {

	var baseUrl = '/api/Mobiles/';

	var mobileService = function ($http) {

		var mobileFactory = {};

		mobileFactory.getMobiles = function () {
			return $http.get(baseUrl);
		}

		mobileFactory.selectMobile = function (id) {
			return true;
		}
		return mobileFactory;
	}


	app.factory("mobileService", ["$http", mobileService]);

}(angular.module("smartmobileModule")));