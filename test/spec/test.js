describe('quoteBook', function() {
  beforeEach(module('quoteBook'));

  var $controller, dataService;
  beforeEach(inject(function(_$controller_, _dataService_) {
    $controller = _$controller_;
    dataService = _dataService_;
  }))

  describe('dataService', function() {

    beforeEach(function() {
      var $scope = {
        quotes: []
      };
      controller = $controller('mainCtrl', { $scope: $scope });
    });

    it('should getData', function() {
      var data = dataService.getData();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
    })

    it('should addData', function() {
      var quotes = [];
      var quote = {text: "foo", author: "anonymous"};
      dataService.addData(quote);
      expect(quotes[0]).toEqual(quote);
    })
  })
})
