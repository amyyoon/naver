(function(){

	var topLi = $('.top').children('li');
	var j=0;

	setInterval(function(){
		if(j<3){j+=1}else{j=0}
		topLi.animate({marginTop:j*-25+'%'})
		topLi.css({display:'none'})
	},3000);
console.log(topLi);

})(jQuery);