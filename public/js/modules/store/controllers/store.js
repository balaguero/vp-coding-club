(function(){
    angular.module('gemStore')
    .controller("StoreController", ['gemsService', 'caseFilter', function(gemsService, caseFilter){
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

        gemsService.getGems().then(function(response){
            that.gems = response.data;
        });
    }]);
})();