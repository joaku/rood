'use strict';

angular.module('roodApp')
.controller('PruebaCtrl', function ($scope, $http, rutines) {

	$scope.rutines = rutines;
	console.log($scope.rutines);


	$scope.clickMe = function(){
		alert("me haz hecho click");
	}





	$scope.map = { 
		center: { 
			latitude: 45, 
			longitude: -73 
		}, 
		zoom: 8 
	};


	$scope.showPosition = function (position) {
		console.log(position);
		$scope.map.center.latitude = position.coords.latitude;
		$scope.map.center.longitude = position.coords.longitude;
		$scope.map.zoom = 15;
		$scope.$apply();
	}

	$scope.showError = function (error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
			$scope.error = "User denied the request for Geolocation."
			break;
			case error.POSITION_UNAVAILABLE:
			$scope.error = "Location information is unavailable."
			break;
			case error.TIMEOUT:
			$scope.error = "The request to get user location timed out."
			break;
			case error.UNKNOWN_ERROR:
			$scope.error = "An unknown error occurred."
			break;
		}
		$scope.$apply();
	}

	$scope.getLocation = function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
		}
		else {
			$scope.error = "Geolocation is not supported by this browser.";
		}
	}

	$scope.getLocation();

});
