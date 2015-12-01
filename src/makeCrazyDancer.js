var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);

makeCrazyDancer.prototype.constructor = makeCrazyDancer;
  
makeCrazyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    makeDancer.prototype.step.call(this);
    var changeColor = function() { this.$node.css('border', '20px solid blue') }
    setTimeout(changeColor.bind(this), 800);
  };