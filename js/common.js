$(document).ready(function() {

    let menuOpen = false;

    $('.menu-background').fadeOut(1);

    $(window).on("scroll", function() {

        if(document.body.clientWidth < 992 && !menuOpen)
        {
            if($(window).scrollTop()) {
                $('.header').addClass('dark-header');
            }
            else {
                $('.header').removeClass('dark-header');
            }
        }
    });

    $('#humburger-in').on('click', function () {
        $('.hamburger').toggleClass('open');
        $('.menu-background').fadeToggle(400);
        $('.drop-menu').toggleClass('drop-menu-open');
        
        if(menuOpen){
            menuOpen = false;
        } else {
            menuOpen = true;
        }
        
        if(menuOpen) {
            $('.header').removeClass('dark-header');
        }
        else {
            $('.header').addClass('dark-header');
        }

        if(!($(window).scrollTop())) {
            $('.header').removeClass('dark-header');
        }
    });

    $("a").on('click', function(event) {
        event.preventDefault();
        /*
		if (this.hash !== "") {
		  event.preventDefault();

		  var hash = this.hash;

		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			window.location.hash = hash;

		  });
        } */
  	});

});