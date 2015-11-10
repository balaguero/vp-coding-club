(function(){
	angular.module("gemStore", ['ui.validate','appCompiledTemplates'])
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-description.html',
    '<h4>Description</h4><blockquote ng-bind="gem.description"></blockquote>');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-gallery.html',
    '<div ng-if="gem.images.length" class="gallery col-md-12"><img ng-src="{{gem.images[gallery.current]}}" class="center-block img-rounded"><br><ul class="list-unstyled"><li ng-repeat="image in gem.images" class="pull-left"><img ng-src="{{image}}" ng-click="gallery.setCurrent($index)" class="img-thumbnail"></li></ul></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-reviews.html',
    '<h4>Reviews<ul class="list-unstyled"><li ng-repeat="r in gem.reviews"><blockquote><strong ng-bind="r.stars + \' Stars\'"></strong><br><cite>By: {{r.author}} - on: {{r.createdOn | date:\'medium\'}}</cite><p ng-bind="r.body"></p></blockquote></li></ul><form ng-controller="ReviewController as review" name="newReviewForm" ng-submit="newReviewForm.$valid &amp;&amp; review.addReview(gem) &amp;&amp; newReviewForm.$setPristine()" novalidate="novalidate"><blockquote ng-show="newReviewForm.$dirty"><strong ng-bind="review.newReview.stars + \' Stars\'"></strong><cite>- By: {{review.newReview.author}}</cite><p ng-bind="review.newReview.body"></p></blockquote><div class="form-group"><select ng-options="star.value as star.label for star in review.availableStars" ng-model="review.newReview.stars" required="required" ng-class="{\'has-error\': newReviewForm.stars.$dirty &amp;&amp; newReviewForm.stars.$invalid}" name="stars" class="form-control"><option value="">Rate this gem</option></select></div><div class="form-group"><textarea placeholder="Your Comment" required="required" ng-model="review.newReview.body" ng-class="{\'has-error\': newReviewForm.body.$dirty &amp;&amp; newReviewForm.body.$invalid}" name="body" class="form-control"></textarea></div><div class="form-group"><input placeholder="Your Email" type="email" required="required" ng-model="review.newReview.author" ng-class="{\'has-error\': newReviewForm.author.$dirty &amp;&amp; newReviewForm.author.$invalid}" name="author" ng-model-options="{updateOn: \'blur\'}" class="form-control"></div><div class="form-group"><input type="submit" value="Submit Review" ng-class="newReviewForm.$invalid ? \'btn-danger\' : \'btn-primary\'" class="btn"></div></form></h4>');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-specs.html',
    '<h4>Specs</h4><blockquote ng-bind="gem.shine"></blockquote>');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-tab.html',
    '<div class="tab"><ul class="nav nav-pills"><li ng-class="{ active: tab.isSet(1) }"><a ng-click="tab.setTab(1)">Description</a></li><li ng-class="{ active: tab.isSet(2) }"><a ng-click="tab.setTab(2)">Specs</a></li><li ng-class="{ active: tab.isSet(3) }"><a ng-click="tab.setTab(3)">Reviews</a></li></ul><div ng-show="tab.isSet(1)"><product-description gem="gem"></product-description></div><div ng-show="tab.isSet(2)"><div product-specs="product-specs" gem="gem"></div></div><div ng-show="tab.isSet(3)"><product-reviews gem="gem"></product-reviews></div></div>');
}]);
})();

(function(){
	angular
		.module("gemStore")
		.directive('productDescription',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-description.html')
			}
		}]);
})();

(function(){
	angular
		.module("gemStore")
		.directive('productGallery',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-gallery.html'),
				controller: GalleryController,
				controllerAs: 'gallery'
			}
		}]);

	function GalleryController(){
		var that = this;

        that.current = 0;

        that.setCurrent = function setCurrent(current) {
            that.current = current || 0;
        }
	}

})();

(function(){
	angular
		.module("gemStore")
		.directive('productReviews',['$templateCache', function($templateCache){
			return {
				restrict: 'E',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-reviews.html')
			}
		}]);
})();

(function(){
	angular
		.module("gemStore")
		.directive('productSpecs',['$templateCache', function($templateCache){
			return {
				restrict: 'A',
				scope: {
					'gem' : '=gem'
				},
				template: $templateCache.get('store/directives/product-specs.html')
			}
		}]);
})();

(function(){
    angular
        .module("gemStore")
        .directive('productTab',['$templateCache', function($templateCache){
            return {
                restrict: 'E',
                scope: {
                    'gem' : '='
                },
                template: $templateCache.get('store/directives/product-tab.html'),
                controller: productTabController,
                controllerAs: 'tab'
            }
        }]);

    function productTabController(){
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
    }
})();

(function(){
	angular.module('gemStore')
	.controller("ReviewController", [function(){
		var that = this;
		
		that.newReview;

		that.resetNewReview = resetNewReview;

		that.availableStars = [
			{label: '1 Star', value: 1},
			{label: '2 Stars', value: 2},
			{label: '3 Stars', value: 3},
			{label: '4 Stars', value: 4},
			{label: '5 Stars', value: 5}
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

        that.refundGem = refundGem;
        that.purchaseGem = purchaseGem;


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

        function purchaseGem (gem){
            gem.sold ++;
        };

        function refundGem(gem){
            gem.sold --;
        };
    }]);
})();
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
(function(){

	angular.module('gemStore')
	.filter('case', function(){
    	return function(input, caseType) {
        	if (caseType.toLowerCase() === "upper") return input.toUpperCase();
      		if (caseType.toLowerCase() === "upper") return input.toLowerCase();
    	};
	});

})();