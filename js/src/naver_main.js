(function(){
// 키워드 슬라이드
	var topLi = $('.top').children('li');
	var j=0;

	setInterval(function(){
		if(j<3){j+=1}else{j=0}
		$('.top').animate({top:j*-100+'%'})
		$('.top').children('li').css({display:'block'})
	},3000);

})(jQuery);