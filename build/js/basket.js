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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYXNrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbigpIHtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcblx0XHRmdW5jdGlvbiBjYWxjUHJpY2UoKSB7XHJcblxyXG5cdFx0XHR2YXIgbGlzdEl0ZW0gPSAkKFwiLnByb2R1Y3RzLWxpc3RfX2l0ZW1cIik7XHJcblx0XHRcdHZhciB0b3RhbCA9ICQoXCIuYmFza2V0LXRvdGFsXCIpO1xyXG5cclxuXHRcdFx0dmFyIGl0ZW1zVG90YWxQcmljZSA9IDA7XHJcblx0XHRcdHZhciBhZGRTZXJ2aWNlUHJpY2UgPSAwO1xyXG5cclxuXHRcdFx0dG90YWwuZmluZChcIi5iYXNrZXQtdG90YWxfX2Ftb3VudFwiKS5odG1sKGxpc3RJdGVtLmxlbmd0aClcclxuXHJcblx0XHRcdGxpc3RJdGVtLmZpbmQoXCIucHJvZHVjdC1wcmljZSBzcGFuOmZpcnN0LWNoaWxkXCIpLmVhY2goZnVuY3Rpb24oaSwgaXRlbSkge1xyXG5cdFx0XHRcdGl0ZW1zVG90YWxQcmljZSArPSAocGFyc2VGbG9hdChpdGVtLmlubmVySFRNTC5yZXBsYWNlKC8gL2csIFwiXCIpKSAqIGxpc3RJdGVtLmZpbmQoXCIuYmFza2V0LXByb2R1Y3QtY291bnRcIilbaV0udmFsdWUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dG90YWwuZmluZChcIi5iYXNrZXQtdG90YWxfX3ByaWNlIHNwYW46Zmlyc3QtY2hpbGRcIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmh0bWwoaXRlbXNUb3RhbFByaWNlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKFwiLm9yZGVyaW5nIGlucHV0OmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbihfLCBpdGVtKSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlID0gJChpdGVtKS52YWwoKTtcclxuXHRcdFx0XHRpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSBhZGRTZXJ2aWNlUHJpY2UgKz0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dG90YWwuZmluZChcIi5iYXNrZXQtdG90YWxfX3RvdGFsLXByaWNlLWFkZCBzcGFuOmZpcnN0LWNoaWxkXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGl0ZW1zVG90YWxQcmljZSArIGFkZFNlcnZpY2VQcmljZTtcclxuXHRcdFx0XHQkKHRoaXMpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y2FsY1ByaWNlKCk7XHJcblxyXG5cdFx0JChcIi5wcm9kdWN0LWFtb3VudF9fcGx1c1wiKS5lYWNoKGZ1bmN0aW9uKF8sIGVsZW0pIHtcclxuXHRcdFx0JChlbGVtKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnByZXYoKS52YWwoZnVuY3Rpb24oaSwgb2xkdmFsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKytvbGR2YWw7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y2FsY1ByaWNlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChcIi5wcm9kdWN0LWFtb3VudF9fbWludXNcIikuZWFjaChmdW5jdGlvbihfLCBlbGVtKSB7XHJcblx0XHRcdCQoZWxlbSkuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5uZXh0KCkudmFsKGZ1bmN0aW9uKGksIG9sZHZhbCkge1xyXG5cdFx0XHRcdFx0aWYob2xkdmFsID4gMSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIC0tb2xkdmFsO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjYWxjUHJpY2UoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0JChcIi5wcm9kdWN0LXJlbW92ZVwiKS5lYWNoKGZ1bmN0aW9uKF8sIGVsZW0pIHtcclxuXHRcdFx0JChlbGVtKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoXCIucHJvZHVjdHMtbGlzdF9faXRlbVwiKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRjYWxjUHJpY2UoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLm9yZGVyaW5nIGlucHV0XCIpLmVhY2goZnVuY3Rpb24oXywgZWxlbSkge1xyXG5cdFx0XHQkKGVsZW0pLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNhbGNQcmljZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblxyXG5cdH0sIGZhbHNlICk7XHJcblxyXG59KSgpOyJdLCJmaWxlIjoiYmFza2V0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
