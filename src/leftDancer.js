var makeLeftDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timerID = makeDancer.prototype.step.call(this);
  // this.$node = $('<span class="solider"><img src="http://www.gifizer.com/gifs/in/a5b76c4d6476f89802a08e7a7c359e1f.gif" /></span>');
  this.goingLeft = true 
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
     left: "-=" + (Math.random() * 200)
     },500);
   }
  } else {
    if (position >= $('body').width() - 100) {
      this.goingLeft = true;
      // this.$node.animate({
      //   left: "-=" + Math.random() * 300
      // },1000);
    } else {
      this.$node.animate({
        left: "+=" + (Math.random() * 200)
      },500);
    }
  }
  
};

makeLeftDancer.prototype.collision = function(){
//traverse window.dancers
for (var i = 0; i < window.dancers.length; i++) {
  if (windows.dancers[i] === this) {
    continue;
  } else {
    var aDancer = windows.dancers[i].$node.css('left').split('p')[0];
    var aThis = this.$node.css('left').split('p')[0];
    var bDancer = windows.dancers[i].$node.css('top').split('p')[0];
    var bThis = this.$node.css('top').split('p')[0];
  
     var a = aDancer - aThis;
     var b = bDancer - bThis;
     var c = Math.sqrt((Math.power(a,2) + Math.power(b,2)));
     if (c < 10){
      $('"#'+i+'"').rotate(90);
   }
  }
}


}




















