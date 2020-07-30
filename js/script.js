$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.columns__open').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});