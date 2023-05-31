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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5qcy1nby1iYXNrZXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2dvLWJhc2tldCAubW9kYWwtLWFuaW1hdGVcIikuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9KTtcbiAgICAkKFwiI2hlYWRlcl9zZWFyY2ggLnNlYXJjaCBmb3JtIGlucHV0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNoZWFkZXJfc2VhcmNoIC5zZWFyY2ggLnNlYXJjaF9jb250ZW50XCIpLnNsaWRlVG9nZ2xlKDE1MCk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIiNoZWFkZXJfc2VhcmNoIC5zZWFyY2ggLnNlYXJjaF9jb250ZW50XCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLmpzLXNob3ctZGVmYXVsdC1tb2RhbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIubW9kYWwubW9kYWwtLWJvcmRlci10b3AubW9kYWwtLWFuaW1hdGVcIikuZmFkZUluKDApO1xuICAgIH0pO1xuICAgICQoXCIubWFya2V0LWl0ZW1fX2NsaWNrLWJ1eVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIubW9kYWwubW9kYWwtLWJvcmRlci10b3AubW9kYWwtLWFuaW1hdGVcIikuZmFkZUluKDApO1xuICAgIH0pO1xuICAgIGpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICAgICAkKCcuc2Vjb25kYXJ5LW5hdl9faXRlbScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgndWwuc2Vjb25kYXJ5LW5hdl9fZHJvcC1kb3duJykudGV4dCgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgIFx0JCh0aGlzKS5maW5kKCdpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHQkKCcuYnJlYWRjcnVtYnMgLmJyZWFkY3J1bWJzX19pdGVtJykubGFzdCgpLmZpbmQoJ2EnKS5hZGRDbGFzcygnYWN0aXZlX3RhZ3MnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pO1xuICAgIH0pO1xuICAgIGpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgIFx0aWYgKCQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICAgICAgJCgnLm1vYmlsZV9oZWFkZXJfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5iYXNrZXQtbmF2X19kcm9wLWRvd24nKS5mYWRlT3V0KDApO1xuICAgICAgICAgICAgICAgICQoJy5sb2dpbi1jb250ZW50JykuaGlkZSgwKTtcbiAgICAgICAgICAgICAgICAkKCcubmF2LXNlYXJjaC13cmFwJykuZmFkZUluKDApO1xuICAgICAgICAgICAgXHQkKCcubW9iaWxlX2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICAkKCcubW9iaWxlX2hlYWRlcl9idXR0b24gc3BhbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH0pO1xuICAgICAgICAgICAgJCgnLm1vYmlsZV9oZWFkZXJfbWFnYXppbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm1haW4tYXNpZGVfY29udGVudCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgXHRcdCQoJy5uYXYtc2VhcmNoLXdyYXAnKS5pbnNlcnRBZnRlcignLm1vYmlsZV9oZWFkZXIgLmNsb3NlX21lbnUnKTtcbiAgICBcdFx0JCgnLmJhc2tldC1uYXZfX2Ryb3AtZG93bicpLmluc2VydEFmdGVyKCcubW9iaWxlX2hlYWRlciAuY2xvc2VfbWVudScpO1xuICAgIFx0XHQkKCcubG9naW4tY29udGVudCcpLmluc2VydEFmdGVyKCcubW9iaWxlX2hlYWRlciAuY2xvc2VfbWVudScpO1xuICAgICAgICAgICAgJCgnLm1haW4tYXNpZGVfY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLm1haW4tYXNpZGVfY29udGVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgfSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuOyhmdW5jdGlvbigpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0XHRmdW5jdGlvbiBNb2RhbFdpbmRvdyhhcmdzKSB7XG5cdFx0XHR2YXIgbW9kYWwgPSAkKGFyZ3MubW9kYWxJZCk7XG5cdFx0XHR2YXIgbW9kYWxDbG9zZSA9ICQoYXJncy5tb2RhbElkICsgXCIgXCIgKyBhcmdzLm1vZGFsQ2xvc2UpO1xuXHRcdFx0dmFyIG1vZGFsU2hvdyA9ICQoYXJncy5tb2RhbFNob3dCdG4pO1xuXG5cdFx0XHRtb2RhbFNob3cuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRcdFx0XHRtb2RhbC50b2dnbGVDbGFzcyhcImhpZGVcIik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdG1vZGFsQ2xvc2UuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcblx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoXCIubW9kYWwtb3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXG5cdFx0dmFyIGJ1cmdlck5hdiA9IGZ1bmN0aW9uKCkge1xuXG5cblx0XHRcdCQoXCIuanMtbmF2IC5tb2JpbGUtbmF2X19idXJnZXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIubWFpbi1uYXZcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwib3Zlci1oaWRlXCIpO1xuXHRcdFx0XHQkKFwiLm1vYmlsZS1uYXZfX2J1cmdlclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKFwiLmpzLW5hdiAuc2VhcmNoLWJ0blwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIi5zZWFyY2hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHR9KTtcblxuXHRcdH07XG5cblx0XHR2YXIgcHJvbW9TbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0JChcIi5wcm9tby1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuXHRcdFx0XHRcIml0ZW1zXCI6IDEsXG5cdFx0XHRcdFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAxXSxcblx0XHRcdFx0XCJpdGVtc0Rlc2t0b3BTbWFsbFwiOiBbOTc5LCAxXSxcblx0XHRcdFx0XCJpdGVtc1RhYmxldFwiOiBbNzY4LCAxXSxcblx0XHRcdFx0XCJhdXRvUGxheVwiOiB0cnVlLFxuXHRcdFx0XHRcInBhZ2luYXRpb25cIjogdHJ1ZSxcblx0XHRcdFx0bmF2aWdhdGlvbjp0cnVlLFxuXHRcdFx0XHRuYXZpZ2F0aW9uVGV4dDogW1xuXHRcdFx0XHRcdFwiPGkgY2xhc3M9J2ZhIGZhLWFycm93LWNpcmNsZS1sZWZ0Jz48L2k+XCIsXG5cdFx0XHRcdFx0XCI8aSBjbGFzcz0nZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0Jz48L2k+XCJcblx0XHRcdFx0XSxcblx0XHRcdH0pO1xuXG5cdFx0fTtcblxuXHRcdHZhciBkcm9wRG93bk1lbnUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBidG4gPSAkKFwiLnNlY29uZGFyeS1uYXZfX2Ryb3AtZG93blwiKS5wYXJlbnQoKTtcblx0XHRcdHZhciBkcm9wRG93biA9ICQoXCIuc2Vjb25kYXJ5LW5hdl9fZHJvcC1kb3duXCIpO1xuXG5cdFx0XHRkcm9wRG93bi5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG5cdFx0XHRcdCQoJChlbGVtKS5wYXJlbnQoKS5jaGlsZHJlbigpWzBdKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvL3RoaXMuaHJlZj0gXCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuXHRcdFx0XHRcdCQodGhpcykuZmluZChcIj46Zmlyc3QtY2hpbGRcIikudG9nZ2xlQ2xhc3MoXCJmYS1hcnJvdy1jaXJjbGUtby1yaWdodCBmYS1hcnJvdy1jaXJjbGUtby1kb3duXCIpO1xuXHRcdFx0XHRcdCQodGhpcy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdH07XG5cblx0XHR2YXIgbWFya2V0SXRlbXNTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0JChcIi5qcy1tYXJrZXQtaXRlbXMtc2xpZGVyMVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLm93bENhcm91c2VsKHtcblx0XHRcdFx0XHRcIml0ZW1zXCI6IDMsXG5cdFx0XHRcdFx0XCJtYXJnaW5cIjogMzAsXG5cdFx0XHRcdFx0XCJpdGVtc0Rlc2t0b3BcIjogWzExOTksIDNdLFxuXHRcdFx0XHRcdFwiaXRlbXNEZXNrdG9wU21hbGxcIjogWzEwMjMsIDJdLFxuXHRcdFx0XHRcdFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXG5cdFx0XHRcdFx0XCJhdXRvUGxheVwiOiBbNTAwMF0sXG5cdFx0XHRcdFx0XCJwYWdpbmF0aW9uXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblwiOiB0cnVlLFxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblRleHRcIjogW1wiXCIsXCJcIl0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG4gICAgICAgICAgICAkKFwiLmpzLW1hcmtldC1pdGVtcy1zbGlkZXIyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogMzAsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAzXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc0Rlc2t0b3BTbWFsbFwiOiBbMTAyMywgMl0sXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0b1BsYXlcIjogWzYwMDBdLFxuICAgICAgICAgICAgICAgICAgICBcInBhZ2luYXRpb25cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25UZXh0XCI6IFtcIlwiLFwiXCJdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiLmpzLW1hcmtldC1pdGVtcy1zbGlkZXIzXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogMzAsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAzXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc0Rlc2t0b3BTbWFsbFwiOiBbMTAyMywgMl0sXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0b1BsYXlcIjogWzcwMDBdLFxuICAgICAgICAgICAgICAgICAgICBcInBhZ2luYXRpb25cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25UZXh0XCI6IFtcIlwiLFwiXCJdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiLmpzLW1hcmtldC1pdGVtcy1zbGlkZXI0XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogMzAsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAzXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc0Rlc2t0b3BTbWFsbFwiOiBbMTAyMywgMl0sXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0b1BsYXlcIjogWzgwMDBdLFxuICAgICAgICAgICAgICAgICAgICBcInBhZ2luYXRpb25cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25UZXh0XCI6IFtcIlwiLFwiXCJdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cdFx0fTtcblxuXHRcdHZhciBwb3BVcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLmpzLXBvcFVwJykuZWFjaChmdW5jdGlvbihfLCBlbCkge1xuXHRcdFx0XHQkKGVsKS5tYWduaWZpY1BvcHVwKHtcblx0XHRcdFx0XHRkZWxlZ2F0ZTogJ2EnLFxuXHRcdFx0XHRcdGdhbGxlcnk6IHtcblx0XHRcdFx0XHRcdGVuYWJsZWQ6dHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgdmlkZW9Qb3BVcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQkKCcubWZwLXlvdXR1YmUnKS5tYWduaWZpY1BvcHVwKHtcblx0XHRcdFx0ZGVsZWdhdGU6ICdhJyxcblx0XHRcdFx0ZGlzYWJsZU9uOiA3MDAsXG5cdFx0XHRcdHR5cGU6ICdpZnJhbWUnLFxuXHRcdFx0XHRtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG5cdFx0XHRcdHJlbW92YWxEZWxheTogMTYwLFxuXHRcdFx0XHRwcmVsb2FkZXI6IGZhbHNlLFxuXHRcdFx0XHRpZnJhbWU6IHtcblx0XHRcdFx0XHRwYXR0ZXJuczoge1xuXHRcdFx0XHRcdFx0eW91dHViZToge1xuXHRcdFx0XHRcdFx0XHRzcmM6ICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEmcmVsPTAnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGZpeGVkQ29udGVudFBvczogZmFsc2Vcblx0XHRcdH0pO1xuXG5cdFx0fTtcblxuXHRcdHZhciBjYXJkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdCQoXCIuY2FyZC1zbGlkZXJcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5vd2xDYXJvdXNlbCh7XG5cdFx0XHRcdFx0XCJpdGVtc1wiOiA0LFxuXHRcdFx0XHRcdFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCA0XSxcblx0XHRcdFx0XHRcIml0ZW1zRGVza3RvcFNtYWxsXCI6IFsxMDI0LCA0XSxcblx0XHRcdFx0XHRcIml0ZW1zVGFibGV0XCI6IFsxMDIzLCAxXSxcblx0XHRcdFx0XHRcIml0ZW1zTW9iaWxlXCI6IFszMjAsIDFdLFxuXHRcdFx0XHRcdFwiYXV0b1BsYXlcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYWdpbmF0aW9uXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblwiOiB0cnVlLFxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblRleHRcIjogW1wiXCIsXCJcIl0sXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2VEcmFnXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInRvdWNoRHJhZ1wiOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHByZXZpZXcgPSAkKFwiI3ByZXZpZXdcIik7XG5cdFx0XHR2YXIgcHJldmlld1ZpZGVvID0gJChcIiNwcmV2aWV3VmlkZW9cIik7XG5cdFx0XHQkKFwiLmNhcmQtc2xpZGVyX19pdGVtXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoXCJ2aWRlb1wiKSkge1xuXHRcdFx0XHRcdCQodGhpcykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRwcmV2aWV3LnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRcdHByZXZpZXdWaWRlby50b2dnbGVDbGFzcyhcImhpZGVcIik7XG5cdFx0XHRcdFx0XHRwcmV2aWV3VmlkZW8uZW1wdHkoKTtcblx0XHRcdFx0XHRcdHZhciBlbCA9ICQodGhpcykuZmluZChcIj46Zmlyc3QtY2hpbGRcIikuY2xvbmUoKS5hcHBlbmRUbyhwcmV2aWV3VmlkZW8pO1xuXHRcdFx0XHRcdFx0ZWwud3JhcChlbC5kYXRhKCkudGh1bWIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihwcmV2aWV3Lmhhc0NsYXNzKFwiaGlkZVwiKSkge1xuXHRcdFx0XHRcdFx0XHRwcmV2aWV3VmlkZW8uYWRkQ2xhc3MoXCJoaWRlXCIpO1xuXHRcdFx0XHRcdFx0XHRwcmV2aWV3LnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHByZXZpZXcuZW1wdHkoKTtcblx0XHRcdFx0XHRcdHZhciBlbCA9ICQodGhpcykuZmluZChcIj46Zmlyc3QtY2hpbGRcIikuY2xvbmUoKS5hcHBlbmRUbyhwcmV2aWV3KTtcblx0XHRcdFx0XHRcdGVsLndyYXAoZWwuZGF0YSgpLnRodW1iKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR9O1xuXG5cdFx0dmFyIGRyb3BEb3duID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdCQoXCIuZHJvcC1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHQkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcyhcImhpZGRlbi14c1wiKTtcblx0XHRcdH0pO1xuXG5cdFx0fTtcblxuXHRcdHZhciBzaG93SGlkZGVuQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQkKFwiLnNob3ctaGlkZGVuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0XHRlbC5odG1sKGVsLmRhdGEoKS5zaG93KTtcblx0XHRcdH0pXG5cblx0XHR9O1xuXG5cdFx0dmFyIGdvVG9Ub3AgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKVxuXHRcdFx0XHRcdCQoXCIuZ28tdG9wXCIpLmZhZGVJbigpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0JChcIi5nby10b3BcIikuZmFkZU91dCgpO1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0JChcImFbaHJlZj0nI3RvcCddXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHR9O1xuXG5cdFx0YnVyZ2VyTmF2KCk7XG5cdFx0cHJvbW9TbGlkZXIoKTtcblx0XHRkcm9wRG93bk1lbnUoKTtcblx0XHRuZXcgTW9kYWxXaW5kb3coe1xuXHRcdFx0XCJtb2RhbElkXCI6IFwiI2RlZmF1bHQtbW9kYWxcIixcblx0XHRcdFwibW9kYWxDbG9zZVwiOiBcIi5tb2RhbF9fYnV0dG9uLS1jbG9zZVwiLFxuXHRcdFx0XCJtb2RhbFNob3dCdG5cIjogXCIuanMtc2hvdy1kZWZhdWx0LW1vZGFsXCJcblx0XHR9KTtcblx0XHRuZXcgTW9kYWxXaW5kb3coe1xuXHRcdFx0XCJtb2RhbElkXCI6IFwiI2NsaWNrLWJ1eVwiLFxuXHRcdFx0XCJtb2RhbENsb3NlXCI6IFwiLm1vZGFsX19idXR0b24tLWNsb3NlXCIsXG5cdFx0XHRcIm1vZGFsU2hvd0J0blwiOiBcIi5qcy1jbGljay1idXlcIlxuXHRcdH0pO1xuXHRcdG5ldyBNb2RhbFdpbmRvdyh7XG5cdFx0XHRcIm1vZGFsSWRcIjogXCIjZ28tYmFza2V0XCIsXG5cdFx0XHRcIm1vZGFsQ2xvc2VcIjogXCIubW9kYWxfX2J1dHRvbi0tY2xvc2VcIixcblx0XHRcdFwibW9kYWxTaG93QnRuXCI6IFwiLmpzLWdvLWJhc2tldFwiXG5cdFx0fSk7XG5cdFx0bWFya2V0SXRlbXNTbGlkZXIoKTtcblx0XHRjYXJkU2xpZGVyKCk7XG5cdFx0ZHJvcERvd24oKTtcblx0XHRwb3BVcCgpO1xuXHRcdHZpZGVvUG9wVXAoKTtcblx0XHRzaG93SGlkZGVuQ29udGVudCgpO1xuXHRcdGdvVG9Ub3AoKTtcblxuXG5cdH0pO1xuXG5cbn0pKCk7Il0sImZpbGUiOiJjb21tb24uanMifQ==
