require('babel-runtime/regenerator');
require('./main.css');
require('./index.html');

const x = async (args) => {
  const { a, b } = args;
  await console.log('Inside arrow function', a, b);
};

x({ a: 10, b: 100 });
