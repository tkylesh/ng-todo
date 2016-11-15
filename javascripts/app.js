"use strict";

console.log("inside app.js");

var app = angular.module("TodoApp",[]);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Item"}];
})

app.controller("TodoCtrl",function($scope){
	$scope.welcome = "hellow";
	$scope.showListView= true;

	$scope.allItems=function(){
		console.log("you clicked all items");
		$scope.showListView = true;
	};

	$scope.newItem=function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	};
})


