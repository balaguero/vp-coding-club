angular.module("gemStore", [])
	.controller("StoreController", function($scope){
		var that = this;

		that.gems = [
			{name: 'Azurite', price: 2.95, canPurchase: true, sold: 0},
			{name: 'Amarillite', price: 3.95, canPurchase: true, sold: 0},
			{name: 'Zafire', price: 6.95, canPurchase: false, sold: 0},
			{name: 'Bloodstone', price: 2.95, canPurchase: true, sold: 0}
		];

		that.purchaseGem = function(name){
			angular.forEach(that.gems, function(gem, key) {
				if(gem.name === name){
					gem.sold ++;
				}
			});
		};
	});