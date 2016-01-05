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
});
