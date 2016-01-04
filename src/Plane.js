function Plane() {
  this.flying = true;
}

Plane.prototype.land = function(airport) {
  airport.dock(this);
  this.flying = false;
};
