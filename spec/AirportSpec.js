describe('Airport', function() {
  var airport;
  var plane = null;

  beforeEach(function() {
    airport = new Airport();
  });

  it('should raise an error if plane is not here', function() {
    expect(function() {airport.release(plane);}).toThrow("Plane is not at this airport");
  });

  it('should initialize with no planes', function() {
    expect(airport.planes.length).toEqual(0);
  });

  describe('#dock', function() {
    it('should store the argument passed in planes', function() {
      airport.dock(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe('#release', function() {

    beforeEach(function() {
      airport.dock(plane);
    });

    it('should release the plane from planes', function() {
      airport.release(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
});
