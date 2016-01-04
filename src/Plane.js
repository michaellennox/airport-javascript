function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function(airport) {
  airport.dock(this);
  this.isFlying = false;
  return 'Plane has successfully landed';
};

Plane.prototype.takeOff = function(airport) {
  airport.release(this);
  this.isFlying = true;
  return 'Plane has successfully taken off';
};
