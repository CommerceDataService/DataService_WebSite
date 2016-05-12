$(document).ready( function(){
	$('.image-carousel').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		centerMode: true,
		centerPadding: '50px',
		pauseOnHover: false,
		initialSlide: 3,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        autoplay: true,
		        autoplaySpeed: 3000,
		        infinite: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        autoplay: true,
		        autoplaySpeed: 3000,
		        infinite: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        autoplay: true,
		        autoplaySpeed: 3000,
		        infinite: false
		      }
		    }
		]
	});
});

 // $('.image-carousel').get(0).slick.setPosition();