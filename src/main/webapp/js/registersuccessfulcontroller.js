
angular.module('abbot.registerSuccessfulController', ['ngRoute']).config(function($routeProvider) 
{
	$routeProvider.when(
			'/registersuccessful', 
			{
				templateUrl: 'views/registersuccessful.html',
				controller: 'registerSuccessfulController' 
			});
});

angular.module("abbot").controller("registerSuccessfulController",function($scope,$http,$controller)
{
});

