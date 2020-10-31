/*function sayHello(name) {
  console.log('Hi ' + name);
}
sayHello();*/

const sayHello = (name) => console.log('Hi ' + name);
sayHello();

const sayHello1 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello2 = () => console.log('Hi Bensille');
const sayHello3 = name => 'Hi ' + name;

sayHello('Bensille');
sayHello1('Bensille', 'Hello');
sayHello2();
console.log(sayHello3('Bensille'));

const sayHello4 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello4('Ben');
sayHello4('Ben', 'Hello');

function checkInput(cb, ...strings) {
  let emptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!emptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All is not empty!');
  },
  'a', 'b', 'c'
);
