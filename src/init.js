$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {

    var dancerMakerImage = $(this).data("src-img");
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      dancerMakerImage
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $(".soldier").on("mouseover", function(event) {
      $(this).rotate({bind:{
        mouseover: function(){
          $(this).rotate({
            angle: 0,
            animateTo:360
          })
        }
      }
    });
    });

  });

   $(".lineUp").on("click", function(event){
    var $lineWidth = $('body').width() * 0.15;
    var linespace = $lineWidth / window.dancers.length; 
    var $startWidth = $('body').width() * 0.25;
    var $height = $('body').height() * 0.4;
    var heightSpace = ($height * 0.5) / window.dancers.length;
    var startHeight = $height;
    $('.soldier').stop(true); // removes any pending items in the jQuery animation queue;
    $('.soldier').show();
    for(var i = 0; i < window.dancers.length; i++){
      clearInterval(window.dancers[i].timerID);
      if (window.dancers[i].CollisionID) {
        clearInterval(window.dancers[i].CollisionID);
      }
      window.dancers[i].setPosition($startWidth - (linespace * i), (heightSpace * i) + startHeight);
    }
   });



   $(".reverse").on("click", function(event){

    for (var i = 0; i < window.dancers.length; i++){
      var randomTop = $("body").height() * Math.random();
      var randomLeft = $("body").width() * Math.random();
      window.dancers[i].setPosition(randomLeft, randomTop);
      window.dancers[i].timerID = makeDancer.prototype.step.call(window.dancers[i]);
    }

   });





















});

