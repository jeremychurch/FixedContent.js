(function (window, $) {
	"use strict";

	$.fn.fixedcontent = function (options) {
		var defaults = {
			marginTop: 24,
			minWidth: 767,
			zIndex: 500
		};

		var options = $.extend({}, defaults, options);

		return this.each(function () {
			var obj = $(this);
			
			var contentOffset;
			var contentHeight;
			var parentWidth;

			obj.css({
				top: options.marginTop,
				'z-index': options.zIndex
			});

			var getContentOffset = function () {
				contentOffset = obj.offset().top;
			};
			getContentOffset();

			var setContentWidth = function () {
				parentWidth = obj.parent().innerWidth();
				obj.css('width', parentWidth);
			};
			setContentWidth();

			var getContentHeight = function () {
				contentHeight = obj.outerHeight();
			};
			getContentHeight();

			var setContentPosition = function () {
				if ($(window).innerHeight() > (contentHeight + options.marginTop)) {
					if ($(window).scrollTop() >= (contentOffset - options.marginTop)) {
						obj.css({
							position: 'fixed'
						});
					}

					else if ($(window).scrollTop() < (contentOffset - options.marginTop)) {
						obj.css('position', 'static');
					}
				}
			};
			setContentPosition();

			$(window).resize(function (e) {
				setContentWidth();
			});

			if ($(window).innerWidth() >= options.minWidth) {
				$(window).scroll(function (e) {
					setContentPosition();
				});
			}
		});
	};

}(window, jQuery));
