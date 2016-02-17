angular.module('quoteBook')
.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {

    dataService.retrieveStorage();

    $scope.quoteData = dataService.getData();
    $scope.filterType = "";

    $scope.addData = function(data) {
      var obj = { text: $scope.quoteInput, author: 'Anonymous' };
      dataService.addData(obj);
      $scope.quoteInput = '';
    }

    $scope.removeData = function(data) {
      dataService.removeData(data);
      $scope.quoteInput = '';
    };

    $scope.changeFilter = function() {
      if ($scope.filterType === "") {
        $scope.filterType = $scope.quoteInput
      } else {
        $scope.filterType = "";
      }
    }


}]);
