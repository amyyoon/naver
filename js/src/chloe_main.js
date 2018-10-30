(function(){

	var gnbLi =$('.gnb').find('li');
	var gnbDl=$('.gnbDl');
	var gnbDt=gnbDl.children('dt');
	
	gnbDl.hide();

	gnbLi.on('mouseover',function(e){
		e.preventDefault();	
		var i =$(this).index();
		gnbLi.eq(i).find('dl').stop().slideDown();
	});

	gnbLi.on('mouseleave',function(e){
		e.preventDefault();	
		var i =$(this).index();
		gnbLi.eq(i).find('dl').stop().slideUp();
	});

	var closeBtn =$('.closeBtn');
	var hamburger =$('.hamburger');
	
	$('.gnbshow').hide();
	
	hamburger.on('click',function(e){
		e.preventDefault();
		$('.gnbshow').fadeIn();
	})
	closeBtn.on('click',function(e){
		e.preventDefault();
		$('.gnbshow').fadeOut();
	});


	var gnbWrapLi = $('.gnbWrap').find('li');
	

	$('.dt').hide();
	gnbWrapLi.on('click',function(e){
		e.preventDefault();
		var i = $(this).index();
		gnbWrapLi.eq(i).find('dt').slideDown();
		gnbWrapLi.eq(i).siblings().find('dt').slideUp();
	});

})(jQuery);