// app.js
var VMC = VMC || {};

VMC.app = (function ($) {

  var init = function init (context) {

    $(document).ready(function () {

      if ($('.js-enabled').length) {
        console.log('jQuery enabled');
      }

    });

  };

  $('body').each(function () {
    init(this);
  });

}(jQuery));
