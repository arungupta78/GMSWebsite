AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

window.onload = () => {
	let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
	bannerNode.parentNode.removeChild(bannerNode);
}

jQuery(document).ready(function ($) {


	"use strict";

	document.querySelectorAll('a[href^="#inquiry_form"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	document.querySelectorAll('a[href^="#features-section"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	$(".loader").delay(1000).fadeOut("slow");
	$("#overlayer").delay(1000).fadeOut("slow");

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();



	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 0,
						nav: true,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			autoHeight: true,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	// siteStellar();

	var siteCountDown = function () {

		$('#date-countdown').countdown('2020/10/10', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top - 0
			}, 1000, 'easeInOutCirc', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

});

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const error = document.getElementById('error');
const form = document.getElementById('form');

function loaded() {
	// bind to the submit event of our form
	var forms = document.querySelectorAll("form.gform");//Get all the forms having class="gform" in the form tag
	for (var i = 0; i < forms.length; i++) {
		forms[i].addEventListener("submit", handleFormSubmit, false);
	}
};

document.addEventListener("DOMContentLoaded", loaded, false);

function handleFormSubmit() {
	// handles form submit without any jquery
	event.preventDefault();           // we are submitting via xhr below
	var form = event.target;
	var data = getFormData(form);         // get the values submitted in the form

	disableAllButtons(form);
	var url = form.action;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	// xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function () {
		var formElements = form.querySelector(".form-elements")
		if (formElements) {
			formElements.style.display = "none"; // hide form
		}
		var thankYouMessage = form.querySelector(".thankyou_message");
		if (thankYouMessage) {
			thankYouMessage.style.display = "block";
		}
		// return;
	};
	// url encode form data for sending as post data
	var encoded = Object.keys(data).map(function (k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
	}).join('&');
	xhr.send(encoded);
}


function disableAllButtons(form) {
	var buttons = form.querySelectorAll("button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	}
}

// get all data in form and return object
function getFormData(form) {
	var elements = form.elements;

	var fields = Object.keys(elements).filter(function (k) {
		return (elements[k].name !== "honeypot");
	}).map(function (k) {
		if (elements[k].name !== undefined) {
			return elements[k].name;
			// special case for Edge's html collection
		} else if (elements[k].length > 0) {
			return elements[k].item(0).name;
		}
	}).filter(function (item, pos, self) {
		return self.indexOf(item) == pos && item;
	});

	var formData = {};
	fields.forEach(function (name) {
		var element = elements[name];

		// singular form elements just have one value
		formData[name] = element.value;

		// when our element has multiple items, get their values
		if (element.length) {
			var data = [];
			for (var i = 0; i < element.length; i++) {
				var item = element.item(i);
				if (item.checked || item.selected) {
					data.push(item.value);
				}
			}
			formData[name] = data.join(', ');
		}
	});

	// add form-specific values into the data
	formData.formDataNameOrder = JSON.stringify(fields);
	formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
	formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

	return formData;
}
