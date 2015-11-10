(function(){
	angular
		.module('gemStore')
		.factory('gemsService',['$http', function($http){
			var that = this;

			that.getGems = getGems;

			function getGems(){
				return $http.get('/gems/get');
			}

			return this;
		}])
})()