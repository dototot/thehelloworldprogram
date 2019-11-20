/**
 * Access wpvars set up in functions.php with wpvars.nameofvar
 * Available variables:
 * ajaxpath, themepath, includespath
 */
jQuery(document).ready(function($){
	$('[data-parallax-speed]').each(function(){
		$bg = $(this);
		$(window).scroll(function(){
			var yPos = -( $(window).scrollTop() / $bg.data('parallax-speed') );
			var coords = '50% ' + yPos + 'px';
			$bg.css({ backgroundPosition: coords });
		});
	});
	$(window).trigger('scroll');

	/* Floating Social Sidebar
	------------------------------------------------------------ */
	var socialSidebar = $('#floater');
	var socialSidebarParent = $('#content');

	var socialSidebarOffset = socialSidebar.offset();
	var socialSidebarTopPadding = 25;
	$(window).scroll(function() {
		if( $('body').innerWidth() < 1000 ) {
			socialSidebar.stop().css({
				marginTop: 0
			});
			return false;
		}

		if ( $(window).scrollTop() > socialSidebarOffset.top ) {
			var scrollTo = $(window).scrollTop() - socialSidebarOffset.top + socialSidebarTopPadding;
			var scrollMax = ( socialSidebarParent.offset().top + socialSidebarParent.height() ) - ( socialSidebar.outerHeight() + socialSidebarOffset.top );
			if ( scrollTo > scrollMax )
				scrollTo = scrollMax;

			socialSidebar.stop().animate({
				marginTop: scrollTo
			});
		} else {
			socialSidebar.stop().animate({
				marginTop: 0
			});
		}
	});

	/* Generate facebook and twitter popups on share click
	---------------------------------------------------------------- */
	$('.facebook-share, .twitter-share').on('click', function(e) {
		e.preventDefault();
		var w = 580, h = 300,
		left = (screen.width/2)-(w/2),
		top = (screen.height/2)-(h/2);

		window.open ( $(this).attr('href'), '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	});

	/* Home Page Carousel
	--------------------------------------------------------------- */
	if( $(".owl-carousel").length ) {
		var owl = $(".owl-carousel");

		owl.owlCarousel({
			singleItem: true,
			autoHeight: true,
		});

		$(".next").click(function(e){
			e.preventDefault();
			owl.trigger('owl.next');
		})
		$(".previous").click(function(e){
			e.preventDefault();
			owl.trigger('owl.prev');
		})
	}

	/* Mobile menus
	------------------------------------------------------------ */
	//bind or unbind the the mobile menu functions depending on size
	$(window).resize(function(){
		if( $('body').innerWidth() <= 1000 ) {
			$('#nav ul, #social ul, #searchform fieldset').addClass('mobile-menu');
			$('#nav, #social, #searchform').addClass('mobile-menu-btn');
		} else {
			$('.mobile-menu').show().removeClass('mobile-menu');
			$('.mobile-menu-btn').removeClass('mobile-menu-btn');
		}
	});
	$(window).trigger("resize");

	mobileMenuSameClick = null;
	mobileMenuToOpen    = null;
	//prevent menu from closing when clicking inside a mobile menu
	$('.mobile-menu').on("click", function(e){
		e.stopPropagation();
	});
	//shut up the opened windows
	$('body').click(function(){
		$('.mobile-menu:visible').slideUp();
		$('.mobile-menu-selected').removeClass('mobile-menu-selected');
		$('.mobile-menu ul').slideUp;
		$('.mobile-menu .expanded').removeClass('expanded');
	});
	$('.mobile-menu-btn').on("click", function(e){
		e.stopPropagation();
		var menuIsOpen = $('.mobile-menu:visible').length;
		mobileMenuSameClick = $(this).find('.mobile-menu:visible').length;
		mobileMenuToOpen = $(this).find('.mobile-menu');

		if ( menuIsOpen ) {
			$('.mobile-menu .menu ul').slideUp();
			$('.expanded').removeClass('expanded');
			$('.mobile-menu-selected').removeClass('mobile-menu-selected');
			if ( ! mobileMenuSameClick ) $(this).addClass('mobile-menu-selected');
			$('.mobile-menu:visible').slideUp(function(){
				if ( ! mobileMenuSameClick ) {
					mobileMenuToOpen.slideDown();
				}
			});
		} else {
			$(this).addClass('mobile-menu-selected');
			mobileMenuToOpen.slideDown();
		}
	});

	/* HTML5 Form types and attributes fallback
	------------------------------------------------------------ */
	//use javascript fallback for unsupported html5 features
	if( ! Modernizr.input.placeholder ) {
		$('[placeholder]').placehold();
	}
});
