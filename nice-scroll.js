// niceScroll inda house
var niceScroll = (function () {

  function pimpMyScroll(origin) {
    switch (origin) {
      case 'why-box-link':
        return _scrollMeTo(target = $('.why-box-tile'));
        break;
      case 'shipping-link':
        return _scrollMeTo(target = $('.shipping-tile'));
        break;
      case 'contact-link':
        return _scrollMeTo(target = $('.site-contactForm'));
        break;
      case 'logo-link':
        return _scrollMeTo(target = $('.main-tile'));
        break;
      default:
        console.log("Get a life!");
    }
  }

  function _scrollMeTo($target) {
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    },
      900, 'swing',
      function () {
        window.location.hash = target;
      }
    );
  }
  return {
    pimpMyScroll: pimpMyScroll
  }
})();
