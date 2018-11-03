(function(){

	var topLi = $('.top').children('li');
	var j=0;

	setInterval(function(){
		if(j<3){j+=1}else{j=0}
		topLi.animate({marginTop:j*-30+'px'})
		topLi.eq(0).next().css({display:'block'})
	},3000);
console.log(topLi);

})(jQuery);