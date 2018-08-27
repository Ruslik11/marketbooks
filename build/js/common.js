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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmpzLWdvLWJhc2tldFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNnby1iYXNrZXQgLm1vZGFsLS1hbmltYXRlXCIpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjaGVhZGVyX3NlYXJjaCAuc2VhcmNoIGZvcm0gaW5wdXRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjaGVhZGVyX3NlYXJjaCAuc2VhcmNoIC5zZWFyY2hfY29udGVudFwiKS5zbGlkZVRvZ2dsZSgxNTApO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoXCIjaGVhZGVyX3NlYXJjaCAuc2VhcmNoIC5zZWFyY2hfY29udGVudFwiKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIuanMtc2hvdy1kZWZhdWx0LW1vZGFsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLm1vZGFsLS1ib3JkZXItdG9wLm1vZGFsLS1hbmltYXRlXCIpLmZhZGVJbigwKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5tYXJrZXQtaXRlbV9fY2xpY2stYnV5XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLm1vZGFsLS1ib3JkZXItdG9wLm1vZGFsLS1hbmltYXRlXCIpLmZhZGVJbigwKTtcclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAgICAgJCgnLnNlY29uZGFyeS1uYXZfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgndWwuc2Vjb25kYXJ5LW5hdl9fZHJvcC1kb3duJykudGV4dCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgXHQkKHRoaXMpLmZpbmQoJ2knKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHRcdCQoJy5icmVhZGNydW1icyAuYnJlYWRjcnVtYnNfX2l0ZW0nKS5sYXN0KCkuZmluZCgnYScpLmFkZENsYXNzKCdhY3RpdmVfdGFncycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pO1xyXG4gICAgfSk7XHJcbiAgICBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFx0aWYgKCQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlX2hlYWRlcl9idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYmFza2V0LW5hdl9fZHJvcC1kb3duJykuZmFkZU91dCgwKTtcclxuICAgICAgICAgICAgICAgICQoJy5sb2dpbi1jb250ZW50JykuaGlkZSgwKTtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYtc2VhcmNoLXdyYXAnKS5mYWRlSW4oMCk7XHJcbiAgICAgICAgICAgIFx0JCgnLm1vYmlsZV9oZWFkZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2JpbGVfaGVhZGVyX2J1dHRvbiBzcGFuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuICAgICAgICAgICAgJCgnLm1vYmlsZV9oZWFkZXJfbWFnYXppbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1hc2lkZV9jb250ZW50JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcdFx0JCgnLm5hdi1zZWFyY2gtd3JhcCcpLmluc2VydEFmdGVyKCcubW9iaWxlX2hlYWRlciAuY2xvc2VfbWVudScpO1xyXG4gICAgXHRcdCQoJy5iYXNrZXQtbmF2X19kcm9wLWRvd24nKS5pbnNlcnRBZnRlcignLm1vYmlsZV9oZWFkZXIgLmNsb3NlX21lbnUnKTtcclxuICAgIFx0XHQkKCcubG9naW4tY29udGVudCcpLmluc2VydEFmdGVyKCcubW9iaWxlX2hlYWRlciAuY2xvc2VfbWVudScpO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1hc2lkZV9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5tYWluLWFzaWRlX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcbjsoZnVuY3Rpb24oKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0ZnVuY3Rpb24gTW9kYWxXaW5kb3coYXJncykge1xyXG5cdFx0XHR2YXIgbW9kYWwgPSAkKGFyZ3MubW9kYWxJZCk7XHJcblx0XHRcdHZhciBtb2RhbENsb3NlID0gJChhcmdzLm1vZGFsSWQgKyBcIiBcIiArIGFyZ3MubW9kYWxDbG9zZSk7XHJcblx0XHRcdHZhciBtb2RhbFNob3cgPSAkKGFyZ3MubW9kYWxTaG93QnRuKTtcclxuXHJcblx0XHRcdG1vZGFsU2hvdy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHRcdFx0XHRcdG1vZGFsLnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtb2RhbENsb3NlLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KFwiLm1vZGFsLW92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhciBidXJnZXJOYXYgPSBmdW5jdGlvbigpIHtcclxuXHJcblxyXG5cdFx0XHQkKFwiLmpzLW5hdiAubW9iaWxlLW5hdl9fYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoXCIubWFpbi1uYXZcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJvdmVyLWhpZGVcIik7XHJcblx0XHRcdFx0JChcIi5tb2JpbGUtbmF2X19idXJnZXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JChcIi5qcy1uYXYgLnNlYXJjaC1idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JChcIi5zZWFyY2hcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHByb21vU2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHQkKFwiLnByb21vLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdFx0XCJpdGVtc1wiOiAxLFxyXG5cdFx0XHRcdFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAxXSxcclxuXHRcdFx0XHRcIml0ZW1zRGVza3RvcFNtYWxsXCI6IFs5NzksIDFdLFxyXG5cdFx0XHRcdFwiaXRlbXNUYWJsZXRcIjogWzc2OCwgMV0sXHJcblx0XHRcdFx0XCJhdXRvUGxheVwiOiB0cnVlLFxyXG5cdFx0XHRcdFwicGFnaW5hdGlvblwiOiB0cnVlLFxyXG5cdFx0XHRcdG5hdmlnYXRpb246dHJ1ZSxcclxuXHRcdFx0XHRuYXZpZ2F0aW9uVGV4dDogW1xyXG5cdFx0XHRcdFx0XCI8aSBjbGFzcz0nZmEgZmEtYXJyb3ctY2lyY2xlLWxlZnQnPjwvaT5cIixcclxuXHRcdFx0XHRcdFwiPGkgY2xhc3M9J2ZhIGZhLWFycm93LWNpcmNsZS1yaWdodCc+PC9pPlwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgZHJvcERvd25NZW51ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBidG4gPSAkKFwiLnNlY29uZGFyeS1uYXZfX2Ryb3AtZG93blwiKS5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIGRyb3BEb3duID0gJChcIi5zZWNvbmRhcnktbmF2X19kcm9wLWRvd25cIik7XHJcblxyXG5cdFx0XHRkcm9wRG93bi5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XHJcblx0XHRcdFx0JCgkKGVsZW0pLnBhcmVudCgpLmNoaWxkcmVuKClbMF0pLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly90aGlzLmhyZWY9IFwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuXHRcdFx0XHRcdCQodGhpcykuZmluZChcIj46Zmlyc3QtY2hpbGRcIikudG9nZ2xlQ2xhc3MoXCJmYS1hcnJvdy1jaXJjbGUtby1yaWdodCBmYS1hcnJvdy1jaXJjbGUtby1kb3duXCIpO1xyXG5cdFx0XHRcdFx0JCh0aGlzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBtYXJrZXRJdGVtc1NsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0JChcIi5qcy1tYXJrZXQtaXRlbXMtc2xpZGVyMVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiAzLFxyXG5cdFx0XHRcdFx0XCJtYXJnaW5cIjogMzAsXHJcblx0XHRcdFx0XHRcIml0ZW1zRGVza3RvcFwiOiBbMTE5OSwgM10sXHJcblx0XHRcdFx0XHRcIml0ZW1zRGVza3RvcFNtYWxsXCI6IFsxMDIzLCAyXSxcclxuXHRcdFx0XHRcdFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXHJcblx0XHRcdFx0XHRcImF1dG9QbGF5XCI6IFs1MDAwXSxcclxuXHRcdFx0XHRcdFwicGFnaW5hdGlvblwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJuYXZpZ2F0aW9uVGV4dFwiOiBbXCJcIixcIlwiXSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcbiAgICAgICAgICAgICQoXCIuanMtbWFya2V0LWl0ZW1zLXNsaWRlcjJcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogMyxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1zRGVza3RvcFwiOiBbMTE5OSwgM10sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc0Rlc2t0b3BTbWFsbFwiOiBbMTAyMywgMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1RhYmxldFwiOiBbNDgwLCAxXSxcclxuICAgICAgICAgICAgICAgICAgICBcImF1dG9QbGF5XCI6IFs2MDAwXSxcclxuICAgICAgICAgICAgICAgICAgICBcInBhZ2luYXRpb25cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uVGV4dFwiOiBbXCJcIixcIlwiXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi5qcy1tYXJrZXQtaXRlbXMtc2xpZGVyM1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCAzXSxcclxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1zRGVza3RvcFNtYWxsXCI6IFsxMDIzLCAyXSxcclxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1zVGFibGV0XCI6IFs0ODAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0b1BsYXlcIjogWzcwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFnaW5hdGlvblwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hdmlnYXRpb25UZXh0XCI6IFtcIlwiLFwiXCJdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLmpzLW1hcmtldC1pdGVtcy1zbGlkZXI0XCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc0Rlc2t0b3BcIjogWzExOTksIDNdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNEZXNrdG9wU21hbGxcIjogWzEwMjMsIDJdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbXNUYWJsZXRcIjogWzQ4MCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvUGxheVwiOiBbODAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdpbmF0aW9uXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvblRleHRcIjogW1wiXCIsXCJcIl0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBwb3BVcCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuanMtcG9wVXAnKS5lYWNoKGZ1bmN0aW9uKF8sIGVsKSB7XHJcblx0XHRcdFx0JChlbCkubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdFx0XHRkZWxlZ2F0ZTogJ2EnLFxyXG5cdFx0XHRcdFx0Z2FsbGVyeToge1xyXG5cdFx0XHRcdFx0XHRlbmFibGVkOnRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdmlkZW9Qb3BVcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0JCgnLm1mcC15b3V0dWJlJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdFx0ZGVsZWdhdGU6ICdhJyxcclxuXHRcdFx0XHRkaXNhYmxlT246IDcwMCxcclxuXHRcdFx0XHR0eXBlOiAnaWZyYW1lJyxcclxuXHRcdFx0XHRtYWluQ2xhc3M6ICdtZnAtZmFkZScsXHJcblx0XHRcdFx0cmVtb3ZhbERlbGF5OiAxNjAsXHJcblx0XHRcdFx0cHJlbG9hZGVyOiBmYWxzZSxcclxuXHRcdFx0XHRpZnJhbWU6IHtcclxuXHRcdFx0XHRcdHBhdHRlcm5zOiB7XHJcblx0XHRcdFx0XHRcdHlvdXR1YmU6IHtcclxuXHRcdFx0XHRcdFx0XHRzcmM6ICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEmcmVsPTAnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRmaXhlZENvbnRlbnRQb3M6IGZhbHNlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGNhcmRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQoXCIuY2FyZC1zbGlkZXJcIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLm93bENhcm91c2VsKHtcclxuXHRcdFx0XHRcdFwiaXRlbXNcIjogNCxcclxuXHRcdFx0XHRcdFwiaXRlbXNEZXNrdG9wXCI6IFsxMTk5LCA0XSxcclxuXHRcdFx0XHRcdFwiaXRlbXNEZXNrdG9wU21hbGxcIjogWzEwMjQsIDRdLFxyXG5cdFx0XHRcdFx0XCJpdGVtc1RhYmxldFwiOiBbMTAyMywgMV0sXHJcblx0XHRcdFx0XHRcIml0ZW1zTW9iaWxlXCI6IFszMjAsIDFdLFxyXG5cdFx0XHRcdFx0XCJhdXRvUGxheVwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFnaW5hdGlvblwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwibmF2aWdhdGlvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJuYXZpZ2F0aW9uVGV4dFwiOiBbXCJcIixcIlwiXSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1vdXNlRHJhZ1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcInRvdWNoRHJhZ1wiOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR2YXIgcHJldmlldyA9ICQoXCIjcHJldmlld1wiKTtcclxuXHRcdFx0dmFyIHByZXZpZXdWaWRlbyA9ICQoXCIjcHJldmlld1ZpZGVvXCIpO1xyXG5cdFx0XHQkKFwiLmNhcmQtc2xpZGVyX19pdGVtXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoJCh0aGlzKS5oYXNDbGFzcyhcInZpZGVvXCIpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRwcmV2aWV3LnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0XHRcdFx0cHJldmlld1ZpZGVvLnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0XHRcdFx0cHJldmlld1ZpZGVvLmVtcHR5KCk7XHJcblx0XHRcdFx0XHRcdHZhciBlbCA9ICQodGhpcykuZmluZChcIj46Zmlyc3QtY2hpbGRcIikuY2xvbmUoKS5hcHBlbmRUbyhwcmV2aWV3VmlkZW8pO1xyXG5cdFx0XHRcdFx0XHRlbC53cmFwKGVsLmRhdGEoKS50aHVtYik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYocHJldmlldy5oYXNDbGFzcyhcImhpZGVcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRwcmV2aWV3VmlkZW8uYWRkQ2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdHByZXZpZXcucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHByZXZpZXcuZW1wdHkoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGVsID0gJCh0aGlzKS5maW5kKFwiPjpmaXJzdC1jaGlsZFwiKS5jbG9uZSgpLmFwcGVuZFRvKHByZXZpZXcpO1xyXG5cdFx0XHRcdFx0XHRlbC53cmFwKGVsLmRhdGEoKS50aHVtYik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGRyb3BEb3duID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHQkKFwiLmRyb3AtZG93blwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuLXhzXCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBzaG93SGlkZGVuQ29udGVudCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0JChcIi5zaG93LWhpZGRlblwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdGVsLmh0bWwoZWwuZGF0YSgpLnNob3cpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGdvVG9Ub3AgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApXHJcblx0XHRcdFx0XHQkKFwiLmdvLXRvcFwiKS5mYWRlSW4oKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiLmdvLXRvcFwiKS5mYWRlT3V0KCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoXCJhW2hyZWY9JyN0b3AnXVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0YnVyZ2VyTmF2KCk7XHJcblx0XHRwcm9tb1NsaWRlcigpO1xyXG5cdFx0ZHJvcERvd25NZW51KCk7XHJcblx0XHRuZXcgTW9kYWxXaW5kb3coe1xyXG5cdFx0XHRcIm1vZGFsSWRcIjogXCIjZGVmYXVsdC1tb2RhbFwiLFxyXG5cdFx0XHRcIm1vZGFsQ2xvc2VcIjogXCIubW9kYWxfX2J1dHRvbi0tY2xvc2VcIixcclxuXHRcdFx0XCJtb2RhbFNob3dCdG5cIjogXCIuanMtc2hvdy1kZWZhdWx0LW1vZGFsXCJcclxuXHRcdH0pO1xyXG5cdFx0bmV3IE1vZGFsV2luZG93KHtcclxuXHRcdFx0XCJtb2RhbElkXCI6IFwiI2NsaWNrLWJ1eVwiLFxyXG5cdFx0XHRcIm1vZGFsQ2xvc2VcIjogXCIubW9kYWxfX2J1dHRvbi0tY2xvc2VcIixcclxuXHRcdFx0XCJtb2RhbFNob3dCdG5cIjogXCIuanMtY2xpY2stYnV5XCJcclxuXHRcdH0pO1xyXG5cdFx0bmV3IE1vZGFsV2luZG93KHtcclxuXHRcdFx0XCJtb2RhbElkXCI6IFwiI2dvLWJhc2tldFwiLFxyXG5cdFx0XHRcIm1vZGFsQ2xvc2VcIjogXCIubW9kYWxfX2J1dHRvbi0tY2xvc2VcIixcclxuXHRcdFx0XCJtb2RhbFNob3dCdG5cIjogXCIuanMtZ28tYmFza2V0XCJcclxuXHRcdH0pO1xyXG5cdFx0bWFya2V0SXRlbXNTbGlkZXIoKTtcclxuXHRcdGNhcmRTbGlkZXIoKTtcclxuXHRcdGRyb3BEb3duKCk7XHJcblx0XHRwb3BVcCgpO1xyXG5cdFx0dmlkZW9Qb3BVcCgpO1xyXG5cdFx0c2hvd0hpZGRlbkNvbnRlbnQoKTtcclxuXHRcdGdvVG9Ub3AoKTtcclxuXHJcblxyXG5cdH0pO1xyXG5cclxuXHJcbn0pKCk7Il0sImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
