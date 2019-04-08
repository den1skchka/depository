if ($(window).width() < 481){
$(".logo").click(function(){
	$("nav ul").slideToggle(1000);
	// $("nav ul").toggleClass("disapear");
});
 $(".owl-carousel").owlCarousel({
  	items:4
  });
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:11
  });
});

$(".portfolio-gallery a").click(function(evt){
	evt.preventDefault();
	var imgPath = $(this).attr("href");
	var oldImage = $(".portfolio-pictures img");
	var newImage = $("<img src='" + imgPath + "'>");
	newImage.hide();
	$(".portfolio-pictures").prepend(newImage);
	newImage.fadeIn(1000);
	oldImage.fadeOut(1000, function(){
	$(this).remove();
	});

});
 	 $('.portfolio-gallery a:first') .click();  