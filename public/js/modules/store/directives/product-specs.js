(function(){
	angular
		.module("gemStore")
		.directive('productSpecs',['$templateCache', function($templateCache){
			return {
				restrict: 'A',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-specs.html')
			}
		}]);
})();