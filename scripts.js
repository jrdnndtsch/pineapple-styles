$(function(){
	$('.main--toggle').on('click', function(){
		$(this).toggleClass('active');
		$('nav.main').toggleClass('active');
		$('main').toggleClass('active-nav');
	});
	$('.cart').on('click', function(){
		$('.cart--quick').toggleClass('active');
		$('main').toggleClass('active-cart');
		setTimeout(function(){
			$('main').hasClass('active-cart') ? $('main').css('left', 'auto') : $('main').attr('style', '')
		}, 300)
	})
})