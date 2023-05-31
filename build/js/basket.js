;(function() {

	document.addEventListener( "DOMContentLoaded", function() {


		function calcPrice() {

			var listItem = $(".products-list__item");
			var total = $(".basket-total");

			var itemsTotalPrice = 0;
			var addServicePrice = 0;

			total.find(".basket-total__amount").html(listItem.length)

			listItem.find(".product-price span:first-child").each(function(i, item) {
				itemsTotalPrice += (parseFloat(item.innerHTML.replace(/ /g, "")) * listItem.find(".basket-product-count")[i].value)
			});

			total.find(".basket-total__price span:first-child").each(function() {
				$(this).html(itemsTotalPrice);
			});

			$(".ordering input:checked").each(function(_, item) {
				var value = $(item).val();
				if(value !== undefined) addServicePrice += parseFloat(value);
			});

			total.find(".basket-total__total-price-add span:first-child").each(function() {
				var result = itemsTotalPrice + addServicePrice;
				$(this).html(result);
			});



		}

		calcPrice();

		$(".product-amount__plus").each(function(_, elem) {
			$(elem).click(function() {
				$(this).prev().val(function(i, oldval) {
					return ++oldval;
				});
				calcPrice();
			});
		});

		$(".product-amount__minus").each(function(_, elem) {
			$(elem).click(function() {
				$(this).next().val(function(i, oldval) {
					if(oldval > 1)
						return --oldval;
					else
						return 1;
				});
				calcPrice();
			});
		});


		$(".product-remove").each(function(_, elem) {
			$(elem).click(function() {
				$(this).closest(".products-list__item").remove();
				calcPrice();
			});
		});

		$(".ordering input").each(function(_, elem) {
			$(elem).click(function() {
				calcPrice();
			});
		});



	}, false );

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYXNrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbigpIHtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cblxuXHRcdGZ1bmN0aW9uIGNhbGNQcmljZSgpIHtcblxuXHRcdFx0dmFyIGxpc3RJdGVtID0gJChcIi5wcm9kdWN0cy1saXN0X19pdGVtXCIpO1xuXHRcdFx0dmFyIHRvdGFsID0gJChcIi5iYXNrZXQtdG90YWxcIik7XG5cblx0XHRcdHZhciBpdGVtc1RvdGFsUHJpY2UgPSAwO1xuXHRcdFx0dmFyIGFkZFNlcnZpY2VQcmljZSA9IDA7XG5cblx0XHRcdHRvdGFsLmZpbmQoXCIuYmFza2V0LXRvdGFsX19hbW91bnRcIikuaHRtbChsaXN0SXRlbS5sZW5ndGgpXG5cblx0XHRcdGxpc3RJdGVtLmZpbmQoXCIucHJvZHVjdC1wcmljZSBzcGFuOmZpcnN0LWNoaWxkXCIpLmVhY2goZnVuY3Rpb24oaSwgaXRlbSkge1xuXHRcdFx0XHRpdGVtc1RvdGFsUHJpY2UgKz0gKHBhcnNlRmxvYXQoaXRlbS5pbm5lckhUTUwucmVwbGFjZSgvIC9nLCBcIlwiKSkgKiBsaXN0SXRlbS5maW5kKFwiLmJhc2tldC1wcm9kdWN0LWNvdW50XCIpW2ldLnZhbHVlKVxuXHRcdFx0fSk7XG5cblx0XHRcdHRvdGFsLmZpbmQoXCIuYmFza2V0LXRvdGFsX19wcmljZSBzcGFuOmZpcnN0LWNoaWxkXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykuaHRtbChpdGVtc1RvdGFsUHJpY2UpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoXCIub3JkZXJpbmcgaW5wdXQ6Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uKF8sIGl0ZW0pIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gJChpdGVtKS52YWwoKTtcblx0XHRcdFx0aWYodmFsdWUgIT09IHVuZGVmaW5lZCkgYWRkU2VydmljZVByaWNlICs9IHBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRvdGFsLmZpbmQoXCIuYmFza2V0LXRvdGFsX190b3RhbC1wcmljZS1hZGQgc3BhbjpmaXJzdC1jaGlsZFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gaXRlbXNUb3RhbFByaWNlICsgYWRkU2VydmljZVByaWNlO1xuXHRcdFx0XHQkKHRoaXMpLmh0bWwocmVzdWx0KTtcblx0XHRcdH0pO1xuXG5cblxuXHRcdH1cblxuXHRcdGNhbGNQcmljZSgpO1xuXG5cdFx0JChcIi5wcm9kdWN0LWFtb3VudF9fcGx1c1wiKS5lYWNoKGZ1bmN0aW9uKF8sIGVsZW0pIHtcblx0XHRcdCQoZWxlbSkuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucHJldigpLnZhbChmdW5jdGlvbihpLCBvbGR2YWwpIHtcblx0XHRcdFx0XHRyZXR1cm4gKytvbGR2YWw7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjYWxjUHJpY2UoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JChcIi5wcm9kdWN0LWFtb3VudF9fbWludXNcIikuZWFjaChmdW5jdGlvbihfLCBlbGVtKSB7XG5cdFx0XHQkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLm5leHQoKS52YWwoZnVuY3Rpb24oaSwgb2xkdmFsKSB7XG5cdFx0XHRcdFx0aWYob2xkdmFsID4gMSlcblx0XHRcdFx0XHRcdHJldHVybiAtLW9sZHZhbDtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNhbGNQcmljZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblxuXHRcdCQoXCIucHJvZHVjdC1yZW1vdmVcIikuZWFjaChmdW5jdGlvbihfLCBlbGVtKSB7XG5cdFx0XHQkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoXCIucHJvZHVjdHMtbGlzdF9faXRlbVwiKS5yZW1vdmUoKTtcblx0XHRcdFx0Y2FsY1ByaWNlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQoXCIub3JkZXJpbmcgaW5wdXRcIikuZWFjaChmdW5jdGlvbihfLCBlbGVtKSB7XG5cdFx0XHQkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjYWxjUHJpY2UoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblxuXHR9LCBmYWxzZSApO1xuXG59KSgpOyJdLCJmaWxlIjoiYmFza2V0LmpzIn0=
