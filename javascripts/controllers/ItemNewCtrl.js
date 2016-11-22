"use strict";

app.controller("ItemNewCtrl", function($scope, $location, ItemFactory){
	$scope.newTask={};

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		console.log("new task in function", $scope.newTask);
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			$location.url("/items/list");
			//itemId get's returned from a firebase post method
			$scope.newTask={};
		});
	};
});