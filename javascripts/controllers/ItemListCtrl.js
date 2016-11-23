"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory){
	$scope.items=[];

	let getItems = function(){
		ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
			$scope.items = fbItems;
		});
	};

	getItems();

	$scope.deleteItem = function(itemId){
		console.log("you deleted me", itemId);
		ItemFactory.deleteItem(itemId).then(function(resonse){
			getItems();
		});
	};

	$scope.inputChange = function(thingy){
		ItemFactory.editItem(thingy).then(function(response){
		});
	};
});