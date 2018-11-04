(function(){

	var topLi = $('.top').children('li');
	var j=0;

	setInterval(function(){
		if(j<3){j+=1}else{j=0}
		$('.top').animate({top:j*-100+'%'})
		$('.top').children('li').next().css({display:'none'})
	},3000);
console.log(topLi);

})(jQuery);