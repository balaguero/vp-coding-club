(function(){
    angular.module('gemStore')
    .controller("StoreController", ['gemsFactory', 'caseFilter', function(gemsFactory, caseFilter){
        var that = this;

        that.logo = "img/angularjs-logo.png";
        that.link = "https://angularjs.org/";

        that.refundGem = refundGem;
        that.purchaseGem = purchaseGem;

        function purchaseGem (gem){
            gem.sold ++;
        };

        function refundGem(gem){
            gem.sold --;
        };

        gemsFactory.getGems().then(function(gems){
            that.gems = gems;
        })
    }]);
})();