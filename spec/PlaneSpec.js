describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("initializes plane's landed property as false", function() {
    expect(plane.landed).toBe(false);
  });

  describe("#land", function(){
    it("changes landed to true", function() {
      plane.land();
      expect(plane.landed).toBe(true);
    });

    it("raises an error if it is already landed", function() {
      plane.land();
      expect(function() { plane.land(); }).toThrow("Plane is already landed");
    });
  });

  describe("#takeOff", function() {
    it("changes landed to false", function() {
      plane.land();
      plane.takeOff();
      expect(plane.landed).toBe(false);
    });
  });
});
