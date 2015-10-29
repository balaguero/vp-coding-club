(function(){
	angular
		.module("gemStore", [])
		.controller("StoreController", ['$scope', function($scope){
			var that = this;

            that.logo = "img/angularjs-logo.png";
            that.link = "https://angularjs.org/";

			that.gems = [
				{name: 'Azurite', price: 2.95, canPurchase: true, sold: 0, soldOut: false},
				{name: 'Amarillite', price: 3.95, canPurchase: true, sold: 0, soldOut: false},
				{name: 'Zafire', price: 6.95, canPurchase: false, sold: 0, soldOut: false},
				{name: 'Bloodstone', price: 2.95, canPurchase: true, sold: 0, soldOut: true}
			];

			that.purchaseGem = function(gem){
				gem.sold ++;
			};

			that.refundGem = function(gem){
				gem.sold --;
			};
		}]);
})();
