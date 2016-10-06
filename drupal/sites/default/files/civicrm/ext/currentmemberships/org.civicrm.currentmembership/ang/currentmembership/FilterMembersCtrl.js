(function(angular, $, _) {

  var module = angular.module('currentmembership').config(function($routeProvider) {
      $routeProvider.when('/filtermembers', {
        controller: 'CurrentmembershipFilterMembersCtrl',
        templateUrl: '~/currentmembership/FilterMembersCtrl.html',

        // If you need to look up data when opening the page, list it out
        // under "resolve".
        resolve: {
          myContact: function(crmApi) {
            return crmApi('Contact', 'getsingle', {
              id: 'user_contact_id',
              return: ['first_name', 'last_name']   
            });
          }
        }
      });
    }
  );

  // The controller uses *injection*. This default injects a few things:
  //   $scope -- This is the set of variables shared between JS and HTML.
  //   crmApi, crmStatus, crmUiHelp -- These are services provided by civicrm-core.
  //   myContact -- The current contact, defined above in config().
  module.controller('CurrentmembershipFilterMembersCtrl', ['$scope', 'crmApi', 'crmStatus', 'crmUiHelp', 'myContact', 'membersFactory',
    function($scope, crmApi, crmStatus, crmUiHelp, myContact, membersFactory) {
    // The ts() and hs() functions help load strings for this module.
    var ts = $scope.ts = CRM.ts('currentmembership');
    var hs = $scope.hs = crmUiHelp({file: 'CRM/currentmembership/FilterMembersCtrl'}); // See: templates/CRM/currentmembership/FilterMembersCtrl.hlp

    // We have myContact available in JS. We also want to reference it in HTML.
    $scope.myContact = myContact;

    membersFactory.getAllMemberships().then(function(memberships) {
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

    $scope.save = function save() {
      return crmStatus(
        // Status messages. For defaults, just use "{}"
        {start: ts('Saving...'), success: ts('Saved')},
        // The save action. Note that crmApi() returns a promise.
        crmApi('Contact', 'create', {
          id: myContact.id,
          first_name: myContact.first_name,
          last_name: myContact.last_name
        })
      );
    };
  }]);

  module.factory('membersFactory', ['$http', '$q', 'crmApi', function($http, $q, crmApi) {

    var dataFactory = {};

    dataFactory.getAllMemberships = function () {
      return crmApi('membership', 'get', {});
    };

    return dataFactory;
  }]);

  module.filter('dateInRange', function() {
    return function(records, dateFrom, dateTo) {
      var inputRecordsArray = Object.values(records);
      if(inputRecordsArray === undefined || inputRecordsArray.length === 0)
        return inputRecordsArray;
      var from = Date.parse(dateFrom)
      var to = Date.parse(dateTo)
      if(isNaN(to) || isNaN(from))
        return inputRecordsArray;

      var results = []

      for(var i = 0; i < inputRecordsArray.length; i++)
      {
        var startDate = Date.parse(inputRecordsArray[i].start_date)
        if(!isNaN(startDate))
          if(startDate > from && startDate < to)
            results.push(inputRecordsArray[i])
      }

      return results;
    }
  });

})(angular, CRM.$, CRM._);
