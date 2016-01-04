describe('Plane', function() {
  var plane;
  var airport = null;

  beforeEach(function() {
    plane = new Plane();
    airport = {
      dock: function(arg){},
      release: function(arg){}
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

    it('should change the value of isFlying to false', function() {
      plane.land(airport);
      expect(plane.isFlying).toBe(false);
    });

    it('should return the landing message if successfully landed', function() {
      expect(plane.land(airport)).toEqual('Plane has successfully landed');
    });
  });

  describe('#takeOff', function() {
    beforeEach(function() {
      plane.land(airport);
    });

    it('should call #release on airport', function() {
      spyOn(airport, 'release');
      plane.takeOff(airport);
      expect(airport.release).toHaveBeenCalledWith(plane);
    });

    it('should change isFlying to true', function() {
      plane.takeOff(airport);
      expect(plane.isFlying).toBe(true);
    });
    
    it('should return the takeoff message if successful', function() {
      expect(plane.takeOff(airport)).toEqual('Plane has successfully taken off');
    });
  });
});
