var myApp = angular.module("myApp",["ngRoute"])

myApp.controller("MyController", function($scope){
	$scope.abouttext = "Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu.	Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu.	Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu.  Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu. Text about Ritu.";
	
	$scope.blogtext = "Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu. Blog from Ritu."
	
	$scope.contacttext = "Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu. Contact Ritu."
}
);

myApp.config(function ($routeProvider){
	$routeProvider
	.when ("/",
	{
		controller: "MyController",
		templateUrl: "Partials/about.html"
	})
	.when ("/blog",
	{
		controller: "MyController",
		templateUrl: "Partials/blog.html"
	})
	.when ("/contact",
	{
		controller: "MyController",
		templateUrl: "Partials/contact.html"
	})
	.when ("/login",
	{
		controller: "MyController",
		templateUrl: "Partials/login.html"
	})
	.when ("/logon",
	{
		controller: "MyController",
		templateUrl: "Partials/logon.html"
	})
	.otherwise (
	{redirectTo: "/"}
	);
}
);