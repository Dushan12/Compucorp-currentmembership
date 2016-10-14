(function(angular) {

  var module = angular.module('currentmembership')

  module.filter('dateInRange', function() {
    return function(records, dateFrom, dateTo) {
      if(records === undefined)
        return records;
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

})(angular);
