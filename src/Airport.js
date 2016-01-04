function Airport() {
  this.planes = [];
}

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.release = function(plane) {
  var planeLoc = this.planes.indexOf(plane);
  if (planeLoc === -1) throw "Plane is not at this airport";
  this.planes.splice(planeLoc, 1);
};
