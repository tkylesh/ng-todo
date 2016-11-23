"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, AuthFactory, UserFactory){
	$scope.message="AuthCtrl";
	$scope.loginContainer = true;
	$scope.registerContainer = false;

	let logMeIn = function(loginStuff){
		AuthFactory.authenticate(loginStuff).then(function(didLogin){
			console.log("didLogin", didLogin);
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			$rootScope.user = userCreds;
			$scope.login = {};
			$scope.register = {};
			$location.url("/items/list");
		});
	};

	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		$scope.loginContainer = false;
		$scope.registerContainer = true;
	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid;
			console.log("didRegister", didRegister);
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			//LOGIN
			logMeIn(registerNewUser);

		});
	};


	$scope.loginUser = function(loginNewUser){
		logMeIn(loginNewUser);
	};
});