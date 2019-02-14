// Foundation JavaScript
// $(document).foundation();
// Documentation can be found at: https://foundation.zurb.com/docs
document.querySelectorAll('pre').forEach((block) => {
  hljs.highlightBlock(block);
});

jQuery(document).ready(function($){
    // Initialize foundation
    $(document).foundation();

	$('[data-parallax-speed]').each(function(){
		$bg = $(this);
		$(window).scroll(function(){
			var yPos = -( $(window).scrollTop() / $bg.data('parallax-speed') );
			var coords = '50% ' + yPos + 'px';
			$bg.css({ backgroundPosition: coords });
		});
	});
	$(window).trigger('scroll');

	/* Generate facebook and twitter popups on share click
	---------------------------------------------------------------- */
	$('.facebook-share, .twitter-share').on('click', function(e) {
		e.preventDefault();
		var w = 580, h = 300,
		left = (screen.width/2)-(w/2),
		top = (screen.height/2)-(h/2);

		window.open ( $(this).attr('href'), '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	});

    /* Auto-pop HTML modal after a time
    ----------------------------------------------------------------- */
    if($('#html-modal').length && !$.cookie('htmlModalWasShown')){
        window.setTimeout(function(){
            $('#html-modal').foundation('reveal', 'open');
            $.cookie('htmlModalWasShown', true, {path: '/'});
        }, 60000);
    }
});
