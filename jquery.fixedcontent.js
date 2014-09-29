(function($) {

  if ($('.js_fixedcontent').length > 0) {

    $.fn.fixedcontent = function(options){
      var defaults = {
        marginTop  : 24,
        minWidth   : 767,
        zIndex     : 500
      };

      var options = $.extend({}, defaults, options);

      return this.each(function() {
        // console.log(options);

        $('.js_fixedcontent').css({
          top: options.marginTop,
          'z-index': options.zIndex
        });

        getContentOffset = function() {
          contentOffset = $('.js_fixedcontent').offset().top;
        };
        getContentOffset();

        setContentWidth = function() {
          parentWidth = $('.js_fixedcontent').parent().innerWidth();
          $('.js_fixedcontent').css('width', parentWidth);
        };
        setContentWidth();

        getContentHeight = function() {
          contentHeight = $('.js_fixedcontent').outerHeight();
        };
        getContentHeight();

        setContentPosition = function() {
          if ($(window).innerHeight() > (contentHeight + options.marginTop)) {
            if ($(window).scrollTop() >= (contentOffset - options.marginTop)) {
              $('.js_fixedcontent').css({
                position: 'fixed'
              });
            }

            else if ($(window).scrollTop() < (contentOffset - options.marginTop)) {
              $('.js_fixedcontent').css('position', 'static');
            }
          }
        };
        setContentPosition();

        $(window).resize(function(e) {
          setContentWidth();
        });

        if ($(window).innerWidth() >= options.minWidth) {
          $(window).scroll(function(e) {
            setContentPosition();
          });
        }
      });
    };

    $('.js_fixedcontent').fixedcontent();

  }

}(jQuery));
