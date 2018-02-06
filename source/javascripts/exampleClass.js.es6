// exampleClass.js
const arr = [
1,
2,
3
];
const squares = arr.map(x => x * x);
console.log(squares);

const fn = (name) => {
  console.log('Hello ' + name + '!');
}
fn('Guest');
