$(document).ready(function() {
    $(".js-go-basket").click(function () {
        $("#go-basket .modal--animate").css('display', 'flex');
    });
    $("#header_search .search form input").click(function () {
        $("#header_search .search .search_content").slideToggle(150);
    });
    $(document).mouseup(function (e) {
        var container = $("#header_search .search .search_content");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });
    $(".js-show-default-modal").click(function () {
        $(".modal.modal--border-top.modal--animate").fadeIn(0);
    });
    $(".market-item__click-buy").click(function () {
        $(".modal.modal--border-top.modal--animate").fadeIn(0);
    });
    jQuery(function ($) {
        $('.secondary-nav__item').each(function () {
            if ($(this).find('ul.secondary-nav__drop-down').text() != "") {
            	$(this).find('i').addClass('active');
            }
        });
		$('.breadcrumbs .breadcrumbs__item').last().find('a').addClass('active_tags').click(function (e) {
			e.preventDefault();
		});
    });
    jQuery(function ($) {
    	if ($(window).width() < 1200) {
            $('.mobile_header_button').click(function () {
                $('.basket-nav__drop-down').fadeOut(0);
                $('.login-content').hide(0);
                $('.nav-search-wrap').fadeIn(0);
            	$('.mobile_header').toggleClass('active');
            	$('body').toggleClass('toggle');
                $('.mobile_header_button span').toggleClass('active');
			});
            $('.mobile_header_magazine').click(function () {
                $('.main-aside_content').toggleClass('active');
                $('body').toggleClass('toggle');
            });
    		$('.nav-search-wrap').insertAfter('.mobile_header .close_menu');
    		$('.basket-nav__drop-down').insertAfter('.mobile_header .close_menu');
    		$('.login-content').insertAfter('.mobile_header .close_menu');
            $('.main-aside_close').click(function () {
                $('.main-aside_content').removeClass('active');
                $('body').removeClass('toggle');
            });
		}
	});
});
;(function() {

	'use strict';

	$(document).ready(function() {

		function ModalWindow(args) {
			var modal = $(args.modalId);
			var modalClose = $(args.modalId + " " + args.modalClose);
			var modalShow = $(args.modalShowBtn);

			modalShow.each(function() {
				$(this).click(function() {
					document.body.style.overflow = "hidden";
					modal.toggleClass("hide");
				});
			});

			modalClose.each(function() {
				$(this).click(function() {
					document.body.style.overflow = "";
					$(this).closest(".modal-overlay").toggleClass("hide");
				});
			});
		};


		var burgerNav = function() {


			$(".js-nav .mobile-nav__burger").click(function() {
				$(".main-nav").toggleClass("active");
				$("body").toggleClass("over-hide");
				$(".mobile-nav__burger").toggleClass("active");
			});

			$(".js-nav .search-btn").click(function() {
				$(".search").toggleClass("active");
			});

		};

		var promoSlider = function() {

			$(".promo-slider").owlCarousel({
				"items": 1,
				"itemsDesktop": [1199, 1],
				"itemsDesktopSmall": [979, 1],
				"itemsTablet": [768, 1],
				"autoPlay": true,
				"pagination": true,
				navigation:true,
				navigationText: [
					"<i class='fa fa-arrow-circle-left'></i>",
					"<i class='fa fa-arrow-circle-right'></i>"
				],
			});

		};

		var dropDownMenu = function() {
			var btn = $(".secondary-nav__drop-down").parent();
			var dropDown = $(".secondary-nav__drop-down");

			dropDown.each(function(index, elem) {
				$($(elem).parent().children()[0]).click(function() {
					//this.href= "javascript:void(0)"
					$(this).find(">:first-child").toggleClass("fa-arrow-circle-o-right fa-arrow-circle-o-down");
					$(this.nextElementSibling.nextElementSibling).toggleClass("active");
				});
			});

		};

		var marketItemsSlider = function() {

			$(".js-market-items-slider1").each(function() {
				$(this).owlCarousel({
					"items": 3,
					"margin": 30,
					"itemsDesktop": [1199, 3],
					"itemsDesktopSmall": [1023, 2],
					"itemsTablet": [480, 1],
					"autoPlay": [5000],
					"pagination": false,
					"navigation": true,
					"navigationText": ["",""],
				});
			});
            $(".js-market-items-slider2").each(function() {
                $(this).owlCarousel({
                    "items": 3,
                    "margin": 30,
                    "itemsDesktop": [1199, 3],
                    "itemsDesktopSmall": [1023, 2],
                    "itemsTablet": [480, 1],
                    "autoPlay": [6000],
                    "pagination": false,
                    "navigation": true,
                    "navigationText": ["",""],
                });
            });
            $(".js-market-items-slider3").each(function() {
                $(this).owlCarousel({
                    "items": 3,
                    "margin": 30,
                    "itemsDesktop": [1199, 3],
                    "itemsDesktopSmall": [1023, 2],
                    "itemsTablet": [480, 1],
                    "autoPlay": [7000],
                    "pagination": false,
                    "navigation": true,
                    "navigationText": ["",""],
                });
            });
            $(".js-market-items-slider4").each(function() {
                $(this).owlCarousel({
                    "items": 3,
                    "margin": 30,
                    "itemsDesktop": [1199, 3],
                    "itemsDesktopSmall": [1023, 2],
                    "itemsTablet": [480, 1],
                    "autoPlay": [8000],
                    "pagination": false,
                    "navigation": true,
                    "navigationText": ["",""],
                });
            });
		};

		var popUp = function() {
			$('.js-popUp').each(function(_, el) {
				$(el).magnificPopup({
					delegate: 'a',
					gallery: {
						enabled:true
					},
					type: 'image'
				});
			});
		};

		var videoPopUp = function() {

			$('.mfp-youtube').magnificPopup({
				delegate: 'a',
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				iframe: {
					patterns: {
						youtube: {
							src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
						}
					}
				},

				fixedContentPos: false
			});

		};

		var cardSlider = function() {

			$(".card-slider").each(function() {
				$(this).owlCarousel({
					"items": 4,
					"itemsDesktop": [1199, 4],
					"itemsDesktopSmall": [1024, 4],
					"itemsTablet": [1023, 1],
					"itemsMobile": [320, 1],
					"autoPlay": false,
					"pagination": false,
					"navigation": true,
					"navigationText": ["",""],
                    "mouseDrag": false,
                    "touchDrag": false,
				});
			});

			var preview = $("#preview");
			var previewVideo = $("#previewVideo");
			$(".card-slider__item").each(function() {
				if($(this).hasClass("video")) {
					$(this).click(function() {
						preview.toggleClass("hide");
						previewVideo.toggleClass("hide");
						previewVideo.empty();
						var el = $(this).find(">:first-child").clone().appendTo(previewVideo);
						el.wrap(el.data().thumb);
					});
				} else {
					$(this).click(function() {
						if(preview.hasClass("hide")) {
							previewVideo.addClass("hide");
							preview.removeClass("hide");
						}
						preview.empty();
						var el = $(this).find(">:first-child").clone().appendTo(preview);
						el.wrap(el.data().thumb);
					});
				}
			});

		};

		var dropDown = function() {

			$(".drop-down").click(function() {
				$(this).toggleClass("active");
				$(this).next().toggleClass("hidden-xs");
			});

		};

		var showHiddenContent = function() {

			$(".show-hidden").click(function() {
				var el = $(this);
				el.html(el.data().show);
			})

		};

		var goToTop = function() {

			$(window).scroll(function() {

				if($(this).scrollTop() > 100)
					$(".go-top").fadeIn();
				else
					$(".go-top").fadeOut();

			});

			$("a[href='#top']").click(function() {
				$("html, body").animate({ scrollTop: 0 }, "slow");
				return false;
			});

		};

		burgerNav();
		promoSlider();
		dropDownMenu();
		new ModalWindow({
			"modalId": "#default-modal",
			"modalClose": ".modal__button--close",
			"modalShowBtn": ".js-show-default-modal"
		});
		new ModalWindow({
			"modalId": "#click-buy",
			"modalClose": ".modal__button--close",
			"modalShowBtn": ".js-click-buy"
		});
		new ModalWindow({
			"modalId": "#go-basket",
			"modalClose": ".modal__button--close",
			"modalShowBtn": ".js-go-basket"
		});
		marketItemsSlider();
		cardSlider();
		dropDown();
		popUp();
		videoPopUp();
		showHiddenContent();
		goToTop();


	});


})();
