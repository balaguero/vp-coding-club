/*(function(){
  angular
    .module('gemStore')
    .config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('index', {
        url: "/index",
        templateUrl: "partials/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      });
  });
})()
*/