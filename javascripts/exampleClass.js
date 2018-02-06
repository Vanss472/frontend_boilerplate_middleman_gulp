// exampleClass.js
'use strict';

var arr = [1, 2, 3];
var squares = arr.map(function (x) {
  return x * x;
});
console.log(squares);

var fn = function fn(name) {
  console.log('Hello ' + name + '!');
};
fn('Guest');