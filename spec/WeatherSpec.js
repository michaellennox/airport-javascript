describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('#isStormy', function() {
    it('should sometimes return true', function() {
      Math.random = function() { return 0.9; };
      expect(weather.isStormy()).toBe(true);
    });

    it('should sometimes return false', function() {
      Math.random = function() { return 0.3; };
      expect(weather.isStormy()).toBe(false);
    });
  });
});
