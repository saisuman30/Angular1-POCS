(function (app) {

	var testData = [
		{
			mobileName: "ABC",
			modelId: 93338,
			features: ["2GB RAM", "32GB Memory", "LTE Support"],
			processor: "Quadcore-Snapdragon-Processor",
			price: 5000,
			approved: false
		},
		{
			mobileName: "PQR",
			modelId: 839393,
			features: ["3GB RAM", "64GB Memory", "LTE Support", "Finger Print Sensor"],
			processor: "OctaCore-Snapdragon-Processor",
			price: 6000,
			approved: false
		}
	];


	var mobileService = function () {

		var mobileFactory = {};

		mobileFactory.getMobiles = function () {
			return testData;
		}

		mobileFactory.selectMobile = function (id) {
			return true;
		}
		return mobileFactory;
	}


	app.factory("mobileService", mobileService);

}(angular.module("smartmobileModule")));