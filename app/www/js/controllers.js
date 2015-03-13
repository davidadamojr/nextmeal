angular.module('nextmealApp.controllers', [])

.controller('FirstRunCtrl', ['$scope', function($scope){
	
}])

.controller('FirstPrefCtrl', ['$scope', function($scope){
	$scope.categories = {"Dairy": ["Milk", "Cheese"],
						 "Meat": ["Pork", "Beef", "Chicken"],
						 "Nuts": ["Peanuts", "Cashew Nuts", "Walnuts"]
						};
}])

.controller('LocationsCtrl', ['$scope', function($scope){

}])

.controller('MealsCtrl', ['$scope', function($scope){
	
}])

.controller('FavoritesCtrl', ['$scope', function($scope){
	
}])

.controller('PrefsCtrl', ['$scope', function($scope){
	$scope.categories = {"Dairy": ["Milk", "Cheese"],
						 "Meat": ["Pork", "Beef", "Chicken"],
						 "Nuts": ["Peanuts", "Cashew Nuts", "Walnuts"]
						};
}]);