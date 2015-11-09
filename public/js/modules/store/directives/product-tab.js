(function(){
    angular
        .module("gemStore")
        .directive('productTab',['$templateCache', function($templateCache){
            return {
                restrict: 'E',
                scope: {
                    'gem' : '=gem'
                },
                template: $templateCache.get('store/directives/product-tab.html'),
                controller: productTabController,
                controllerAs: 'tab'
            }
        }]);

    function productTabController(){
        var that = this;

        that.tab = 3;

        that.setTab = function setTab(tab){
            that.tab = tab;
        }

        that.isSet = function isSet(tab){
            return that.tab === tab;
        }
    }
})();
