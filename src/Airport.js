function Airport(capacity, weather) {
  this.weather = weather || new Weather();
  this.planes = [];
  this._capacity = capacity || 20;
}

Airport.prototype.instructLanding = function(plane) {
  if (this.weather.isStormy()) throw 'Cannot land- weather is stormy';
  if (this.planes.length >= this._capacity ) throw 'Cannot land planes when airport is full';
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
