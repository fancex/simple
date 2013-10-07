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
	item=$(this);
	item.html('<div class="simple-tip" target="'+item.attr('id')+'" style="float:right;cursor:pointer;" title="chiudi">X</div><div style="clear:both;border-bottom:solid grey 1px;"></div>'+item.html());
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