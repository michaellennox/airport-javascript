describe ("Weather", function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe("#isStormy", function() {
    it("returns stormy sometimes", function() {
      spyOn(Math, 'random').and.callFake(function() {
        return 0.9;
      });
      expect(weather.isStormy()).toBe(true);
    });
  });
});
