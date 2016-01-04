function Plane() {
  this.isFlying = true;
  this.weather = new Weather();
}

Plane.prototype.land = function(airport) {
  airport.dock(this);
  this.isFlying = false;
  return 'Plane has successfully landed';
};

Plane.prototype.takeOff = function(airport) {
  if (this.weather.isStormy) throw "Cannot takeoff when stormy";
  airport.release(this);
  this.isFlying = true;
  return 'Plane has successfully taken off';
};
