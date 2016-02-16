angular.module('quoteBook')
.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {

    dataService.retrieveStorage();
    
    $scope.quoteData = dataService.getData();

    $scope.quotes = dataService.quotes;

    $scope.addData = function(data) {
      var obj = { text: $scope.quoteInput, author: 'Anonymous' };
      dataService.addData(obj);
      $scope.quoteInput = '';
    }

    $scope.removeData = function(data) {
      dataService.removeData(data);
      $scope.quoteInput = '';
    };

}]);
