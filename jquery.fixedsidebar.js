$(function() {

  // Disable if the window is less than:
  minWindowWidth = 767;

  // Maintain this much space between the
  // window and top of the content:
  topMargin = 24;

  $('.js_fixed_content').css({
    top: topMargin,
    'z-index': '500'
  });

  getContentOffset = function() {
    contentOffset = $('.js_fixed_content').offset().top;
  };
  getContentOffset();

  setContentWidth = function() {
    parentWidth = $('.js_fixed_content').parent().innerWidth();
    $('.js_fixed_content').css('width', parentWidth);
  };
  setContentWidth();

  getContentHeight = function() {
    contentHeight = $('.js_fixed_content').outerHeight();
  };
  getContentHeight();

  setContentPosition = function() {
    if ($(window).innerHeight() > (contentHeight + topMargin)) {
      if ($(window).scrollTop() >= (contentOffset - topMargin)) {
        $('.js_fixed_content').css({
          position: 'fixed',
        });
      }

      else if ($(window).scrollTop() < (contentOffset - topMargin)) {
        $('.js_fixed_content').css('position', 'static');
      }
    }
  };
  setContentPosition();

  $(window).resize(function(e) {
    // getContentOffset();
    setContentWidth();
    // getContentHeight();
  });

  if ($(window).innerWidth() > minWindowWidth) {
    $(window).scroll(function(e) {
      setContentPosition();
    });
  }
});
