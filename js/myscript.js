$(window).scroll(function(){
	$('#show').toggleClass('scrolled', $(this).scrollTop() > 30);
});