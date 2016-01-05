function Airport() {
  this.planes = [];
}

Airport.prototype.instructLanding = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
  if (this._planesIndex(plane) === -1) throw "Plane is not at this airport";
  plane.takeOff();
  this.planes.splice(this._planesIndex(plane), 1);
};

Airport.prototype._planesIndex = function(plane) {
  return this.planes.indexOf(plane);
};
