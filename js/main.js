// JavaScript Document

(function($){
	
	
/* Animation */ 

	$(".back").animate({
		height: 150,
		width: 150,
		});




/* jQuery for Tool Tips */

    $('.masterTooltip').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tipText',title).removeAttr('title');
        $('<p class="toolTip"></p>').text(title).appendTo('body').fadeIn('slow');
    }, function(){
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
            var mousex = e.pageX + 15;
            var mousey = e.pageY + 25;
            $('.tooltip')
                .css({top: mousey, left: mousex })

        });
		
		 })(jQuery);