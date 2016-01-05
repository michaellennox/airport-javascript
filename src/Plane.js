function Plane() {
  this.landed = false;
}

Plane.prototype.land = function() {
  this.landed = true;
};
