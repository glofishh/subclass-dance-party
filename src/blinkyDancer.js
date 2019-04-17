var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
 
  MakeDancer.call(this, top, left, timeBetweenSteps); //inheriting the MakeDancer
  //overriding span node 
  this.$node = $('<img src="images/thronecat.png" class="dancer" width="300">');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  //MakeDancer.prototype.step.call(this)
  var oldStep = MakeDancer.prototype.step.bind(this);
  // call the old version of step at the beginning of any call to this new version of step
   oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  console.log(this.$node);
  this.$node.toggle();
  //blinkyDancer.$node.toggle();
};