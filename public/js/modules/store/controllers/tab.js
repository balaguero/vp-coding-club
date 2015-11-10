(function() {
    angular.module('gemStore')
    
    .controller('TabController', [function(){
        var that = this;

        that.tab = 3;

        that.setTab = setTab;

        that.isSet = isSet;

        function setTab(tab){
            that.tab = tab;
        }

        function isSet(tab){
            return that.tab === tab;
        }

    }]);
})();