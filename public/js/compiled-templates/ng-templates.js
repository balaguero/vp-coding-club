(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/views/index.html',
    '<section ng-controller="StoreController as store"><div class="container"><div class="row"><h2 ng-bind="\'Hello Angular\' | case: \'upper\'" class="pull-left"></h2><a ng-href="{{store.link}}" target="_blank" class="pull-left"></a></div><div ng-repeat="gem in store.gems | orderBy:\'name\'" ng-show="!gem.soldOut" class="row product"><div class="col-md-9"><h3 ng-bind="gem.name" ng-class="{red: !gem.canPurchase, blue: gem.canPurchase}"></h3><h4 ng-bind="gem.price | currency"></h4></div><div class="col-md-3"><h4 ng-bind="\'Sold gems: \' + gem.sold"></h4><div><button ng-show="gem.canPurchase" ng-click="store.purchaseGem(gem)" class="btn pull-left">Add to cart</button><button ng-show="gem.sold &gt; 0" ng-click="store.refundGem(gem)" class="btn pull-left">Refund</button></div></div><product-gallery gem="gem"></product-gallery><product-tab gem="gem"></product-tab></div></div></section>');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-description/product-description.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('appCompiledTemplates');
} catch (e) {
  module = angular.module('appCompiledTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('store/directives/product-gallery/product-gallery.html',
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
  $templateCache.put('store/directives/product-reviews/product-reviews.html',
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
  $templateCache.put('store/directives/product-specs/product-specs.html',
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
  $templateCache.put('store/directives/product-tab/product-tab.html',
    '<div class="tab"><ul class="nav nav-pills"><li ng-class="{ active: tab.isSet(1) }"><a ng-click="tab.setTab(1)">Description</a></li><li ng-class="{ active: tab.isSet(2) }"><a ng-click="tab.setTab(2)">Specs</a></li><li ng-class="{ active: tab.isSet(3) }"><a ng-click="tab.setTab(3)">Reviews</a></li></ul><div ng-show="tab.isSet(1)"><product-description gem="gem"></product-description></div><div ng-show="tab.isSet(2)"><div product-specs="product-specs" gem="gem"></div></div><div ng-show="tab.isSet(3)"><product-reviews gem="gem"></product-reviews></div></div>');
}]);
})();
