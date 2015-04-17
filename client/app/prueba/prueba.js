'use strict';

angular.module('roodApp')
.config(function ($stateProvider) {
	$stateProvider
	.state('prueba', {
		url: '/prueba',
		templateUrl: 'app/prueba/prueba.html',
		controller: 'PruebaCtrl',
		resolve: {
			rutines: function($http){

				var rutines =  $http.get('/api/rutines/allPopulated');

				rutines.success(function(data, status, headers, config){
					return data;
				}).error(function(err){
					console.log(err);
				});


			}
		}
	});
});