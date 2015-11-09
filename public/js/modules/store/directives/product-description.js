(function(){
	angular
		.module("gemStore")
		.directive('productDescription',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-description.html')
			}
		}]);
})();
