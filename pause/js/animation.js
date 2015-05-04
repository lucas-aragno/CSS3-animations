$(window).ready(function(){
	$('.tuna').on('click',function(){
         var right = $(this).css("right");
         var bgPosition = $(this).css("background-position");

         $(this).removeClass("walking");

         $(this).css({"right": right, "background-position": bgPosition});
	});
});