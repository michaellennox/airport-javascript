function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function(airport) {
  airport.dock(this);
  this.isFlying = false;
  return 'Plane has successfully landed';
};
