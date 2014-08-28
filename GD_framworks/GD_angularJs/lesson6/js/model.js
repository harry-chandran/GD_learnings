 var myApp = angular.module("myApp",[]);
 myApp.factory("myfavorites",function(){
 	var myfavorites = {};
 	myfavorites.names=[
 		{
 			item : "chicken",
 			food : "chicken biriyani"
 		},
 		{
 			item : "egg",
 			food : "kalaki"

 		},
 		{
 			item : "pizza",
 			food : "pepper chicken cheese buster"

 		},
 		{
 			item : "burger",
 			food : "spicy chicken"

 		},
 		{
 			item : "fish",
 			food : "Vanjaram"

 		}
 	]
	return myfavorites;
 });