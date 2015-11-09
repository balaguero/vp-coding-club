(function(){
	angular
		.module("gemStore")
		.directive('productReviews',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-reviews.html')
			}
		}]);
})();
