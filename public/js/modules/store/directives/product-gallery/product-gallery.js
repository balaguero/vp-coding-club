(function(){
	angular
		.module("gemStore")
		.directive('productGallery',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '='
				},
				template: $templateCache.get('store/directives/product-gallery/product-gallery.html'),
				controller: GalleryController,
				controllerAs: 'gallery'
			}
		}]);

	function GalleryController(){
		var that = this;

        that.current = 0;

        that.setCurrent = function setCurrent(current) {
            that.current = current || 0;
        }
	}

})();
