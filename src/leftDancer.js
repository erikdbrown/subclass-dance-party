var makeLeftDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeLeftDancer.prototype = Object.create(makeDancer.prototype);

makeLeftDancer.prototype.constructor = makeLeftDancer;
  
makeLeftDancer.prototype.step = function() {


    makeDancer.prototype.step.call(this);

    var changeColor = function() { 
      this.$node.toggleClass('blueSquare');
      var l = this.$node.css('left').split('p');
      var num = l[0];
      window.limit = false;

      if ( num < $("body").width() && limit === false) {
        this.$node.animate({
        left: "+=50"
      });

      } else {
        limit = true;
        this.$node.animate({
        left: "-=50"
      });
      }
    }
    setTimeout(changeColor.bind(this), 800);

  };