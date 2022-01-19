const { stdin } = require('process');
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = () => {
  stdin.on('data', key => {
    if (key === '\u0003') {
      console.log("thanks for playing");
      process.exit();
    }
  })
};

module.exports = { setupInput }