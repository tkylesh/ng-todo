"use strict";

app.controller("AuthCtrl", function($scope, AuthFactory, UserFactory){
	$scope.message="AuthCtrl";
	$scope.loginContainer = true;
	$scope.registerContainer = false;

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
		});
	};


	$scope.loginUser = function(loginNewUser){
		AuthFactory.authenticate(loginNewUser).then(function(didLogin){
			console.log("didLogin", didLogin);
		});
	};
});