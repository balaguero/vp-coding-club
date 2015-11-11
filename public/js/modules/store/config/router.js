(function(){
  angular
    .module('gemStore')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");
      //
      // Now set up the states
      $stateProvider
        .state('index', {
          url: "/",
          templateProvider: function($templateCache){  
          // simplified, expecting that the cache is filled
          // there should be some checking... and async $http loading if not found
            return $templateCache.get('store/views/index.html'); 
          }
        });
    }]);
})();