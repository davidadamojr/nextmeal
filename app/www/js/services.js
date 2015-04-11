angular.module('nextmealApp.services', [])

.factory('Preferences', ['$http', function($http){
	var preferences = {
		items: []
	};
	preferences.get = function(){
		return $http.get('/preferences').success(function(data) {
			angular.copy(data, preferences.items);
		}).error(function(data, status) {
			alert("There was an error retrieving your preferences.");
		});
	};
	
	return preferences;
}]);