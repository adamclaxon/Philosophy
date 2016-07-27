$('.footnote-label').click(function(){
	$(this).next().toggleClass('display');
});

$('.menu-button').click(function(){
	$("nav").toggleClass('open');
});
