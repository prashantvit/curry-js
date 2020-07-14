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



function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}
