describe("Airport", function() {
  var airport;
  var plane = null;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: function() {}
    };
  });

  it("airport's planes array is empty", function(){
    expect(airport.planes.length).toEqual(0);
  });

  describe("#instructLanding", function() {
    it("adds landed planes in plane array", function() {
      airport.instructLanding(plane);
      expect(airport.planes).toContain(plane);
    });

    it("calls #land on the plane passed as arg", function() {
      spyOn(plane, 'land');
      airport.instructLanding(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
});
