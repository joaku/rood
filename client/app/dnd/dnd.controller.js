'use strict';

angular.module('roodApp')
.controller('DndCtrl', function ($scope) {

	$scope.models = {
		selected: null,
		lists: {"A": [], "B": []}
	};

	for (var i = 1; i <= 3; ++i) {
		$scope.models.lists.A.push({label: "Item A" + i});
		$scope.models.lists.B.push({label: "Item B" + i});
	}
});
