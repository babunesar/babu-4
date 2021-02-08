jQuery(function($){

    // Nice Select plugin
    $(document).ready(function(){

        $('select').niceSelect();

    });


    // Logo Slider Owl Carousel Plugin
    $(document).ready(function(){

        $('.logo-item ul').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			smartSpeed: 2000,
			margin: 30,
			autoplayHoverPause: true,
            autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 1
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});

	});



	// Client Slider Owl Carousel Plugin
	$(document).ready(function(){

		$('.client-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			smartSpeed: 2000,
			margin: 30,
			autoplayHoverPause: true,
			autoplay: true,
			items: 1,
		});

	});

	// Go Top Event
	$(document).ready(function(){

		$(function(){
			// Scroll Event
			$(window).on('scroll', function(){
				var scrolled = $(window).scrollTop();
				if (scrolled > 600) $('.go-top').addClass('active');
				if (scrolled < 600) $('.go-top').removeClass('active');
			});  
			// Click Event
			$('.go-top').on('click', function() {
				$("html, body").animate({ scrollTop: "0" },  500);
			});
		});

	});


}(jQuery));