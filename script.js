//accordion
$('.simpleacc-title').click(function(){
genitore=$(this).parent('.simpleacc');
$(genitore).find('.simpleacc-inner').slideToggle();


});

//tabs
$('.simpletab-inner').hide();
$( ".open" ).each(function( index ) {
	li=$(this);
	li.addClass("simpletab-li-attivo");
	$('#'+li.attr('target')).show();
});

$('.simpletab-ul li').click(function(){
	genitoreul=$(this).parent('.simpletab-ul');
	genitorediv=$(genitoreul).parent('.simpletab');
	target=$(genitorediv).find('#'+$(this).attr('target'));
	$($(genitorediv).children('.simpletab-inner')).hide();
	$($(genitoreul).children('li')).removeClass("simpletab-li-attivo");
	$(this).addClass("simpletab-li-attivo");
	$(target).show();

});
/*simple tip */
$( ".simple-tipmenu" ).each(function( index ) {
	/*add close button at top of every tip*/
	item=$(this);
	item.html('<div class="simple-tip" target="'+item.attr('id')+'" style="float:right;cursor:pointer;" title="chiudi">X</div><div style="clear:both;border-bottom:solid grey 1px;"></div>'+item.html());
	/*end add...*/
	$('#'+li.attr('target')).show();
});

$('.simple-tip').click(function(){
	target=$('#'+$(this).attr('target'));
	if(target.is(':visible')){
		$(target).hide();
	}else{
		target.css('top',$(this).position().top+$(this).height());
		target.css('left',$(this).position().left+$(this).width());
		$(target).show();
	}

});


/*simple menu*/
$('.simple-menu li a').click(function(){
	ul=$(this).parent('li');
	child=ul.children('ul');
	child.slideToggle();
});

/*simple navbar*/
$('.drop-menu').hide();
$('.simple-bar').mouseleave(function(){
	//$('.drop-menu').slideUp();
});
$('.simple-bar-nav li a').hover(function(){
	
});
$('.bar-drop').click(function(){
	$('.s-active').removeClass('s-active')
	$(this).addClass('s-active');
	genitore=$(this).parent('.bar-dropdown');
	target=$(genitore).find('.drop-menu');
	if(target.is(':visible')===false){
		pos=$(genitore).position();
		target.css('left',pos.left-0);
		target.css('top',pos.top+genitore.height());
		$('.drop-menu').hide();
		target.slideToggle();
	}else{
		target.slideUp();
		$('.s-active').removeClass('s-active');
	}
	

});