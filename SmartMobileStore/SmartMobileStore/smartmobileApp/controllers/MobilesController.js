(function () {
	
	var mobileController = function ($scope) {
		$scope.mobiles = [
			{
				mobileName: "ABC",
				modelId: 93338,
				features: ["2GB RAM","32GB Memory","LTE Support"],
				processor: "Quadcore-Snapdragon-Processor",
				price:5000
			},
			{
				mobileName: "PQR",
				modelId:839393,
				features: ["3GB RAM", "64GB Memory", "LTE Support","Finger Print Sensor"],
				processor: "OctaCore-Snapdragon-Processor",
				price: 6000
			}



		]
	};

	app.controller("MobilesController", ["$scope", mobileController]);

}(angular.module("smartmobileModule")));