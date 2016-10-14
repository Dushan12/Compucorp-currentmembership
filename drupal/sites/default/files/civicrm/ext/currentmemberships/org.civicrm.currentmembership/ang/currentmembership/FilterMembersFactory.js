(function(angular, $, _) {

  var module = angular.module('currentmembership')

  module.factory('membersFactory', ['crmApi', function(crmApi) {

    var dataFactory = {};

    dataFactory.getAllMemberships = function () {
      return crmApi('membership', 'get', {});
    };

    return dataFactory;

  }]);

  module.factory('translateFactory', [function() {

    var dataFactory = {};

    dataFactory.ts = function (module) {
      CRM.ts(module)
    };
    return dataFactory;

  }]);

})(angular, CRM.$, CRM._);
