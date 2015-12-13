
var niceScroll = (function () {

  function pimpMyScroll(origin) {
    switch (origin) {
      case 'div1':
        return _scrollMeTo(target = $('.div1'));
        break;
      case 'div2':
        return _scrollMeTo(target = $('.div2'));
        break;
      case 'div3':
        return _scrollMeTo(target = $('.div3'));
        break;
      case 'div4':
        return _scrollMeTo(target = $('.div4'));
        break;
      default:
        console.log("Can't help");
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
