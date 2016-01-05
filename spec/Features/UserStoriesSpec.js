describe("User Stories", function(){
  var plane, airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
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
});
