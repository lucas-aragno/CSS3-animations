// wrap everything inside a $(window).load();

// Get the audio element
var byakkoya = document.querySelector('audio');

//-- Add the event listener "canplaythrough" to our song stored in the byakkoya variable above to run the playable function.--//

  // hint: VAR.addEventListener("EVENT", YOURFUNCTION, false);

byakkoya.addEventListener("canplaythrough", playable, false);

//--Reference code below

// This should run only after we're certain the music will play through.
function playable() {
  setTimeout(function(){ 
    // add a class to the body tag so we know we're playable...
    $("body").addClass("playable");
    $("#play-me").html("Play me.").click(function(){
      song(byakkoya);
      $("body").addClass("playing");
    });
  },3000); //a wee bit of a delay to make sure peeps see the PSA  
};

// create function to play and loop audio
function song(a){
    //start playing at 0
    a.currentTime = 0;
    a.play();

    //when we hit 64 seconds... 
    setTimeout(function(){
        // skip back to 24.5 seconds and keep playing...
        a.currentTime = 24.55;

        // then loop back when we hit 64 again, or every 59.5 seconds.
        setInterval(function(){
            a.currentTime = 24.55;
        },39450);
    },64000);
}