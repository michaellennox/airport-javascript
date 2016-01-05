describe("Airport", function() {
  var airport;
  var plane, weather = null;


  beforeEach(function() {
    weather = {
      isStormy: function() { return false; }
    };
    airport = new Airport(20, weather);
    plane = {
      land: function() {},
      takeOff: function() {}
    };
  });

  it("airport's planes array is empty", function(){
    expect(airport.planes.length).toEqual(0);
  });

  it("capacity of airport is able to be increased", function() {
    var largerAirport = new Airport(50, weather);
    for (var i = 0; i < 50; i++) {
      largerAirport.instructLanding(new Plane());
    }
    expect(function() {
      largerAirport.instructLanding(plane);
    }).toThrow('Cannot land planes when airport is full');
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

    it("does not allow planes to land when airport is full", function() {
      for (var i = 0; i < 20; i++) {
        airport.instructLanding(plane);
      }
      expect(function() {
        airport.instructLanding(plane);
      }).toThrow('Cannot land planes when airport is full');
    });

    describe('when weather is stormy', function() {
      it('does not allow landing', function() {
        spyOn(weather, 'isStormy').and.callFake(function(){
          return true;
        });
        expect(function() {
          airport.instructLanding(plane);
        }).toThrow('Cannot land- weather is stormy');
      });
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

    describe('when weather is stormy', function() {
      it('does not allow take off', function() {
        spyOn(weather, 'isStormy').and.callFake(function(){
          return true;
        });
        expect(function() {
          airport.instructTakeOff(plane);
        }).toThrow('Cannot take off- weather is stormy');
      });
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
