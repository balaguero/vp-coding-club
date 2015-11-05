(function() {
    angular.module('gemStore')
    
    .controller('TabController', [function(){
        var that = this;

        that.tab = 3;

        that.setTab = function setTab(tab){
            that.tab = tab;
        }

        that.isSet = function isSet(tab){
            return that.tab === tab;
        }

    }]);

})();