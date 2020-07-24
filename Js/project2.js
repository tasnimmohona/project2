//counterup
jQuery(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});


//  Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows',
	getSortData: {
		name: '.name',
		symbol: '.symbol',
		number: '.number parseInt',
		category: '[data-category]',
		weight: function (itemElem) {
			var weight = $(itemElem).find('.weight').text();
			return parseFloat(weight.replace(/[\(\)]/g, ''));
		}
	}
});

// filter functions
var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function () {
		var number = $(this).find('.number').text();
		return parseInt(number, 10) > 50;
	},
	// show if name ends with -ium
	ium: function () {
		var name = $(this).find('.name').text();
		return name.match(/ium$/);
	}
};

// bind filter button click
$('#filters').on('click', 'button', function () {
	var filterValue = $(this).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[filterValue] || filterValue;
	$grid.isotope({
		filter: filterValue
	});
});

// bind sort button click
$('#sorts').on('click', 'button', function () {
	var sortByValue = $(this).attr('data-sort-by');
	$grid.isotope({
		sortBy: sortByValue
	});
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function () {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
});


//owl-carousel

jQuery(function ($) {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		items: 4,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			768: {
				items: 5
			}
		}
	})
});


//fadeIn fadeOut when scrolling

$(window).scroll(function () {
	if ($(this).scrollTop() > 120) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}

});

//for scroll top

$('.scrollup').click(function () {
	$("html, body").animate({
		scrollTop: 0
	},1000);
	return false;
});


// blog section
function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");


	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}


//map     
var map;
$(document).ready(function () {
	map = new GMaps({
		el: '#map',
		zoom: 15,
		lat: 33.8145277,
		lng: -117.927165,
		scrollwheel: false
	});
	map.addControl({
		position: 'top_right',
		content: 'Geolocate',
		style: {
			margin: '5px',
			padding: '1px 6px',
			border: 'solid 1px #717B87',
			background: '#fff'
		},
		events: {
			click: function () {
				GMaps.geolocate({
					success: function (position) {
						map.setCenter(position.coords.latitude, position.coords.longitude);
					},
					error: function (error) {
						alert('Geolocation failed: ' + error.message);
					},
					not_supported: function () {
						alert("Your browser does not support geolocation");
					}
				});
			}
		}
	});
});


//Fixed header
$(window).on('scroll', function () {

	if ($(window).scrollTop() > 650) {

		$('.navbar').addClass('header-solid animated fadeInDown');
	} else {

		$('.navbar').removeClass('header-solid animated fadeInDown');

	}

});

//active class color change
$('.nav li').click(function(){
  $('.nav li').removeClass('active');
  $(this).addClass('active');
  })


// dropdown active class color change
$('.nav li').click(function(){
  $('.nav li').removeClass('drop-active');
  $(this).addClass('drop-active');
  })

  //

new WOW().init();


