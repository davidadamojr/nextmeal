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
	$scope.meals = [{'image': 'img/southern_fried_chicken.png',
					 'description': 'Two crispy, handbreaded, buttermilk fried chicken breasts, pepper cream gravy and white cheddar mashed potatoes with a corn and fire-roasted red pepper succotash.',
					 'votes': '27',
					 'name': 'Southern Fried Chicken'},
					 {'image': 'img/med_chix_tacos.png',
					 'description': 'Grilled chicken breast seasoned with Big Poppa Smokers’ Desert Gold Rub, cucumber, Roma tomatoes, red onions, feta cheese and fresh cilantro tossed in red wine vinaigrette and drizzled with Greek yogurt crema in a chargrilled pita. Served with seasonal bistro grains.',
					 'votes': '10',
					 'name': 'Mediterranean Chicken Pita Tacos'},
					 {'image': 'img/chip_glazed_salmon.png',
					 'description': 'Oven roasted Atlantic salmon topped with a slightly sweet and savory cherry chipotle glaze, served with roasted asparagus and a fire‑roasted red bell pepper, tomato and spinach couscous.',
					 'votes': '18',
					 'name': 'Cherry Chipotle Glazed Salmon'}];
	$scope.selectedMeal = 0;
	
	$scope.nextMeal = function(){
		if ($scope.selectedMeal + 1 >=  $scope.meals.length){
			$scope.selectedMeal = 0;
		} else {
			$scope.selectedMeal = $scope.selectedMeal + 1;
		}
	};
	
	$scope.previous = function(){
		if ($scope.selectedMeal - 1 > -1){
			$scope.selectedMeal = $scope.selectedMeal - 1;
		} else {
			$scope.selectedMeal = $scope.meals.length - 1;
		}
	};
					 
}])

.controller('FavoritesCtrl', ['$scope', function($scope){
	
}])

.controller('PrefsCtrl', ['$scope', function($scope){
	$scope.categories = {"Dairy": ["Milk", "Cheese"],
						 "Meat": ["Pork", "Beef", "Chicken"],
						 "Nuts": ["Peanuts", "Cashew Nuts", "Walnuts"]
						};
}]);