var makeLeftDancer = function(top, left, timeBetweenSteps, imgURL) {
  makeDancer.call(this, top, left, timeBetweenSteps, imgURL);
  this.timerID = makeDancer.prototype.step.call(this);
  // this.$node = $('<span class="solider"><img src="http://www.gifizer.com/gifs/in/a5b76c4d6476f89802a08e7a7c359e1f.gif" /></span>');
  this.goingLeft = true;
  this.CollisionID = setInterval(this.collision.bind(this), 100);
};


makeLeftDancer.prototype = Object.create(makeDancer.prototype);

makeLeftDancer.prototype.constructor = makeLeftDancer;
  
makeLeftDancer.prototype.step = function() {
  var l = this.$node.css('left').split('p');
  var position = l[0];

  if (this.goingLeft){
    if(position < 100) {
      this.goingLeft = false;
      // this.$node.animate({
      // left: "+=" + Math.random() * 300
      // },1000);
    } else {
     this.$node.animate({
     left: "-=300" 
     // + (Math.random() * 200)
     }, 50);
   }
  } else {
    if (position >= $('body').width() - 100) {
      this.goingLeft = true;
      // this.$node.animate({
      //   left: "-=" + Math.random() * 300
      // },1000);
    } else {
      this.$node.animate({
        left: "+=300" 
        // + (Math.random() * 200)
      },50);
    }
  }
  
};

makeLeftDancer.prototype.collision = function(){
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] === this) {
      continue;
    } else {
      var aDancer = window.dancers[i].$node.css('left').split('p')[0];
      var aThis = this.$node.css('left').split('p')[0];
      var bDancer = window.dancers[i].$node.css('top').split('p')[0];
      var bThis = this.$node.css('top').split('p')[0];
    
       var a = aDancer - aThis;
       var b = bDancer - bThis;
       var c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)));
       if (c < 180){
        var jQid = '#' + i;
        $(jQid).rotate({
            angle: 0,
            animateTo:360
          });
      }
    }
  }
};




















