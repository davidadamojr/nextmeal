// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var db = null;

angular.module('nextmealApp', ['ionic', 'nextmealApp.controllers', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
	db = $cordovaSQLite.openDB("my.db");
	$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS preferences (id integer primary key, name text, excluded integer)");
  });
})

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('firstrun', {
			url: '/',
			templateUrl: 'partials/firstrun.html',
			controller: 'FirstRunCtrl'
		})
		
		.state('firstpreferences', {
			url: '/firstpreferences',
			templateUrl: 'partials/firstpreferences.html',
			controller: 'FirstPrefCtrl'
		})
		
		.state('locations', {
			url: '/locations',
			templateUrl: 'partials/locations.html',
			controller: 'LocationsCtrl'
		})
		
		.state('tabs', {
			url: '/tabs',
			templateUrl: 'partials/tabs.html'
		})
		
		.state('tabs.meals', {
			url: '/meals',
			views: {
				meals: {
					templateUrl: 'partials/meals.html',
					controller: 'MealsCtrl'
				}
			}
		})
		
		.state('tabs.favorites', {
			url: '/favorites',
			views: {
				favorites: {
					templateUrl: 'partials/favorites.html',
					controller: 'FavoritesCtrl'
				}
			}
		})
		
		.state('tabs.preferences', {
			url: '/preferences',
			views: {
				preferences: {
					templateUrl: 'partials/preferences.html',
					controller: 'PrefsCtrl'
				}
			}
		});
});
