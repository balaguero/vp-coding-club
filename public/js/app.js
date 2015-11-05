(function(){
	angular.module("gemStore", ['ui.validate'])
})();

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
(function(){
	angular.module('gemStore')
	.controller("ReviewController", [function(){
		var that = this;
		
		that.newReview;

		that.resetNewReview = resetNewReview

		that.availableStars = [
			{label: 1, value: 1},
			{label: 2, value: 2},
			{label: 3, value: 3},
			{label: 4, value: 4},
			{label: 5, value: 5}
		];

		that.addReview = addReview;

		function resetNewReview(){
			that.newReview = {
				stars: '',
				author: '',
				body: '',
				createdOn: ''
			};
		}

		function addReview(gem){
			that.newReview.createdOn = Date.now();
			gem.reviews.push(angular.copy(that.newReview));
			resetNewReview();
            return true;
		}

		resetNewReview();
	}]);
})();
(function(){
    angular.module('gemStore')
    .controller("StoreController", ['$scope', 'caseFilter', function($scope, caseFilter){
        var that = this;

        that.logo = "img/angularjs-logo.png";
        that.link = "https://angularjs.org/";


        that.gems = [{
            name: caseFilter('Azurite', 'upper'),
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            shine: 8,
            price: 110.50,
            rarity: 7,
            color: '#CCC',
            faces: 14,
            canPurchase: true,
            sold: 0,
            soldOut: false,
            images: [
               "img/gem-02.gif",
               "img/gem-05.gif",
               "img/gem-09.gif"
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            canPurchase: true,
            sold: 0,
            soldOut: false,
            images: [
              "img/gem-01.gif",
              "img/gem-03.gif",
              "img/gem-04.gif"
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Zircon',
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            price: 1100,
            rarity: 2,
            color: '#000',
            faces: 6,
            canPurchase: true,
            sold: 0,
            soldOut: false,
            images: [
              "img/gem-06.gif",
              "img/gem-07.gif",
              "img/gem-08.gif"
            ],
            reviews: [{
                stars: 1,
                body: "This gem is WAY too expensive for its rarity value.",
                author: "turtleguyy@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "BBW: High Shine != High Quality.",
                author: "LouisW407@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "Don't waste your rubles!",
                author: "nat@example.org",
                createdOn: 1397490980837
            }]
        }];

        that.purchaseGem = function(gem){
            gem.sold ++;
        };

        that.refundGem = function(gem){
            gem.sold --;
        };
    }]);
})();
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
(function(){

	angular.module('gemStore')
	.filter('case', function(){
    	return function(input, caseType) {
        	if (caseType.toLowerCase() === "upper") return input.toUpperCase();
      		if (caseType.toLowerCase() === "upper") return input.toLowerCase();
    	};
	});

})();