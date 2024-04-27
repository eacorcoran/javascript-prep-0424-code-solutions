// create your loops here.
function whileLoop1() {
  const numArray = [];
  index = 0;
  while (index < 10) {
    numArray.push(index);
    index += 1;
  }
  return numArray;
}

const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output', whileLoop1Result);

function whileLoop2() {
  const numArray = [];
  index = 0;
  while (index <= 18) {
    numArray.push(index);
    index += 2;
  }
  return numArray;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2 output', whileLoop2Result);

function forLoop1() {
  const numArray = [];
  for (let index = 0; index <= 9; index += 1) {
    numArray.push(index);
  }
  return numArray;
}

const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

function forLoop2() {
  const numArray = [];
  for (let index = 100; index >= 0; index -= 1) {
    console.log('Time to explosion: ', index);
  }
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log('for in loop 1 output', forInLoop1Result);

function forInLoop2(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

const forInLoop2Result = forInLoop2(person);
console.log('for in loop 2 output', forInLoop2Result);
