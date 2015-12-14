var smoothScroll = (function () {

  function pimpMyScroll(target) {
    return _scrollMeTo(target = $('#' + target))
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
