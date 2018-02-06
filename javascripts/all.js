
"use strict";

'use strict';var VMC=VMC||{};VMC.app=function($){var init=function init(context){$(document).ready(function(){if($('.js-enabled').length){console.log('jQuery enabled');}});};$('body').each(function(){init(this);});}(jQuery);

'use strict';var arr=[1,2,3];var squares=arr.map(function(x){return x*x;});console.log(squares);var fn=function fn(name){console.log('Hello '+name+'!');};fn('Guest');