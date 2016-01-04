describe('User Stories', function() {
  var plane, airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('An airport traffic controller should be able to instruct a plane to land and receive confirmation', function() {
    // As an air traffic controller
    // So I can get passengers to a destination
    // I want to instruct a plane to land at an airport and confirm that it has landed
    expect(plane.land(airport)).toEqual('Plane has successfully landed');
    expect(airport.planes).toContain(plane);
    expect(plane.isFlying).toBe(false);
  });

});
