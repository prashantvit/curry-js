multiply(a, b) {
return a*b;
}
const multiply2 = multiply.bind(this, 2);
multiply2(3);

const multiply () {
const args = [...arguments];
  function multFn () {
    multiply(...args, ...arguments)
  }
  let result = args.reduce((total, item) => total*item)
  multFn.toString = result;
  return multFn;
}

//https://medium.com/@ishwar.rimal/trickiest-javascript-interview-question-with-solution-73958f99a376
