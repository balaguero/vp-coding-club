(function(){
	angular.module('gemStore')
	.controller("GalleryController", ['$scope', function($scope){
		that = this;

        that.current = 0;

        that.setCurrent = function setCurrent(current) {
            that.current = current || 0;
            console.log(that.current);
        }
	}]);
})();