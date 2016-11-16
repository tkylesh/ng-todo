"use strict";

app.controller("TodoCtrl",function($scope, ItemFactory){
	$scope.welcome = "hellow";
	$scope.showListView= true;
	$scope.newTask={};
	$scope.items=[];

	ItemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
	});

	$scope.allItems=function(){
		console.log("you clicked all items");
		$scope.showListView = true;
	};

	$scope.newItem=function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	};

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("new task in function", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask="";
		$scope.showListView = true;
	};
})