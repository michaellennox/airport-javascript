describe('Airport', function() {
  var airport;
  var plane = null;

  beforeEach(function() {
    airport = new Airport();
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
});
