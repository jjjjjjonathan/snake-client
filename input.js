const { connect } = require("http2");

let connection;
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = key => {
  if (key === "w") {
    connection.write('Move: up');
  } else if (key === "a") {
    connection.write('Move: left');
  } else if (key === "s") {
    connection.write('Move: down');
  } else if (key === "d") {
    connection.write('Move: right');
  } else if (key === '\u0003') {
    console.log("thanks for playing");
    process.exit();
  } else if (key === '1') {
    connection.write('Say: You snooze you lose!');
  } else if (key === '2') {
    connection.write('Say: I was so close!');
  }
};

module.exports = { setupInput }