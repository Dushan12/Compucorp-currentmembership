(function(angular, $, _) {

  var module = angular.module('currentmembership').config(function($routeProvider) {
      $routeProvider.when('/filtermembers', {
        controller: 'CurrentmembershipFilterMembersCtrl',
        templateUrl: '~/currentmembership/FilterMembersCtrl.html',
      });
    }
  );

  module.controller('CurrentmembershipFilterMembersCtrl', ['$scope', 'membersFactory', 'translateFactory',
    function($scope, membersFactory, translateFactory) {
    var ts = $scope.ts = translateFactory.ts('currentmembership');

    membersFactory.getAllMemberships().then(function(memberships) {
      
      console.log(memberships)

      if(memberships.is_error == 0 && memberships.count > 0)
        $scope.memberships = memberships.values
      else
      {
        if(memberships.is_error > 0)
          $scope.error = "Failed to load memberships"
        $scope.memberships = []
      }
    }, function(reason) {
      $scope.error = "Failed to load memberships: Reason - " + reason
    });
    
  }]);

})(angular, CRM.$, CRM._);
