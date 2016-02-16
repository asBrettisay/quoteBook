angular.module('quoteBook')
.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {
    $scope.quoteData = dataService.getData();


}]);
