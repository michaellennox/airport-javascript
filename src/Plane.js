function Plane() {
  this.landed = false;
}

Plane.prototype.land = function() {
  if (this.landed === true) throw "Plane is already landed";
  this.landed = true;
};

Plane.prototype.takeOff = function() {
  this.landed = false;
};
