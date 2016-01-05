describe("User Stories", function(){
  var plane, airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('while the weather is fine', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.callFake(function() { return 0.1; });
    });

    // As an air traffic controller
    // So I can get passengers to a destination
    // I want to instruct a plane to land at an airport and confirm that it has landed

    it("allows planes to land", function() {
      airport.instructLanding(plane);
      expect(airport.planes).toContain(plane);
      expect(plane.landed).toBe(true);
    });

    // As an air traffic controller
    // So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it("a plane should be able to be told to take off", function() {
      airport.instructLanding(plane);
      airport.instructTakeOff(plane);
      expect(airport.planes).not.toContain(plane);
      expect(plane.landed).toBe(false);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when the airport is full
    describe("while airport is full", function() {
      it("does not allow planes to land", function() {
        for (var i = 0; i < 20; i++) {
          airport.instructLanding(new Plane());
        }
        expect(function() {
          airport.instructLanding(plane);
        }).toThrow('Cannot land planes when airport is full');
      });
    });

    // As the system designer
    // So that the software can be used for many different airports
    // I would like a default airport capacity that can be overridden as appropriate
    it("capacity of airport is able to be increased", function() {
      var largerAirport = new Airport(50);
      for (var i = 0; i < 50; i++) {
        largerAirport.instructLanding(new Plane());
      }
      expect(function() {
        largerAirport.instructLanding(plane);
      }).toThrow('Cannot land planes when airport is full');
    });
  });

  describe('while the weather is awful', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.callFake(function() { return 0.9; });
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it("a plane should not take off when the weather is stormy", function() {
      airport.planes.push(plane);
      expect(function(){
        airport.instructTakeOff(plane);
      }).toThrow('Cannot take off- weather is stormy');
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it("a plane should not land when the weather is stormy", function() {
      expect(function(){
        airport.instructLanding(plane);
      }).toThrow('Cannot land- weather is stormy');
    });
  });

});
