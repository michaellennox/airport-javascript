function Airport() {
  this.planes = [];
}

Airport.prototype.instructLanding = function(plane) {
  plane.land();
  this.planes.push(plane);
};

//
// Airport.prototype = function() {
//   function land(plane) {
//     this.planes.push(plane);
//   }
// };
