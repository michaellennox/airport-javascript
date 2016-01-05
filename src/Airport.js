function Airport(weather) {
  this.weather = weather || new Weather();
  this.planes = [];
}

Airport.prototype.instructLanding = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
  if (this._planesIndex(plane) === -1) throw 'Plane is not at this airport';
  if (this.weather.isStormy()) throw 'Cannot take off- weather is stormy';
  plane.takeOff();
  this.planes.splice(this._planesIndex(plane), 1);
};

Airport.prototype._planesIndex = function(plane) {
  return this.planes.indexOf(plane);
};
