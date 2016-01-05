describe("Airport", function() {
  var airport;
  var plane = null;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: function() {},
      takeOff: function() {}
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

  describe('#instructTakeOff, when plane landed,', function() {
    beforeEach(function() {
      airport.instructLanding(plane);
    });

    it('removes plane passed as arg from array', function() {
      airport.instructTakeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });

    it('instructs a plane to take off', function() {
      spyOn(plane, 'takeOff');
      airport.instructTakeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
  });

  describe('#instructTakeOff, when plane not landed,', function() {
    it('should throw an error', function() {
      expect(function() {
        airport.instructTakeOff(plane);
      }).toThrow('Plane is not at this airport');
    });
  });
});
