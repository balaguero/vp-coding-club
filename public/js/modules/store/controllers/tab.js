(function() {
    angular.module('gemStore')
    
    .controller('TabController', [function(){
        var that = this;

        that.tab = 1;

        that.setTab = function setTab(tab){
            that.tab = tab;
            console.log(that.tab)
        }

        that.isSet = function isSet(tab){
            return that.tab === tab;
        }

    }]);

})();