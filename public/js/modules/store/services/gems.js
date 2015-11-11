(function(){
	angular
		.module('gemStore')
		.factory('gemsFactory',['$http', function($http){
			var that = this;

			that.getGems = getGems;

			function getGems(){
				return $http.get('/gems/get')
                .then(function(response) {
                    return response.data;
                });
			}

			return this;
		}])
})();