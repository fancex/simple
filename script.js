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
