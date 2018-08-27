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
