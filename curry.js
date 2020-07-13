
multiply(a, b) {
return a*b;
}
const multiply2 = multiply.bind(this, 2);
multiply2(3);

const multiply () {
const args = [...arguments];
  return multFn () {
    multiply(...args, ...arguments)
  }
  let result = args.reduce((total, item) => total*item)
  multFn.toString = result;
  return multFn;
}
