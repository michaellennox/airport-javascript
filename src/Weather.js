function Weather() {}

Weather.prototype.isStormy = function() {
  return (Math.random() > 0.8) ? true : false;
};
