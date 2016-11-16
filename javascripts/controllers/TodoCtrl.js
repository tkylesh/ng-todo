"use strict";

app.controller("TodoCtrl",function($scope){
	$scope.welcome = "hellow";
	$scope.showListView= true;
	$scope.newTask={};
	$scope.items=[
	{
		id:0,
		task:"mow the lawn",
		isCompleted: true,
		assignedTo: "Zoe"
	},
	{
		id:1,
		task:"grade quizzes",
		isCompleted: false,
		assignedTo: "William"
	},
	{
		id:2,
		task:"take a nap",
		isCompleted: false,
		assignedTo: "Zoe"
	}
	];

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