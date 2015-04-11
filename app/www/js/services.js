angular.module('nextmealApp.services', [])

.factory('Preferences', ['$http', 'apiBaseUrl', function($http, apiBaseUrl){
	var preferences = {
		items: []
	};
	preferences.get = function(){
		return $http.get(apiBaseUrl + '/preferences').success(function(data) {
			angular.copy(data, preferences.items);
		}).error(function(data, status) {
			alert("There was an error retrieving your preferences.");
		});
	};
	
	return preferences;
}]);