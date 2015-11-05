(function(){
	angular.module('gemStore')
	.controller("GalleryController", ['$scope', function($scope){
		var that = this;

        that.current = 0;

        that.setCurrent = function setCurrent(current) {
            that.current = current || 0;
        }
	}]);
})();