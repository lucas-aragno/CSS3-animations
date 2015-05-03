  $(window).load(function(){
    setTimeout(function(){ //gotta wait a lil' bit
      $("#load-state").removeClass("loading").addClass("loaded");
    }, 3500);
  });