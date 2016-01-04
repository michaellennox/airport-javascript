describe('Plane', function() {
  var plane;
  var airport = null;

  beforeEach(function() {
    plane = new Plane();
    airport = {
      dock: function(arg){}
    };
  });

  it('should be flying on initialization', function() {
    expect(plane.isFlying).toBe(true);
  });

  describe('#land', function() {
    it('should call #dock on airport', function() {
      spyOn(airport, 'dock');
      plane.land(airport);
      expect(airport.dock).toHaveBeenCalledWith(plane);
    });
    it('should change the value of flying to false', function() {
      plane.land(airport);
      expect(plane.isFlying).toBe(false);
    });
    it('should return the landing message if successfully landed', function() {
      expect(plane.land(airport)).toEqual('Plane has successfully landed');
    });
  });
});
