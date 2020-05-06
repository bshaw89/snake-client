let connection;

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else {
      process.stdout.write('.');
    }
  });
  stdin.on('data', (key) => {
    if (key === '\u0077') {
      connection.write("Move: up");
    };
    if (key === '\u0061') {
      connection.write("Move: left");
    };
    if (key === '\u0073') {
      connection.write("Move: down");
    };
    if (key === '\u0064') {
      connection.write("Move: right");
    };
    if (key === '\u0066') {
      connection.write("Say: SNAAAAAKE!!!");
    };
    if (key === '\u0065') {
      connection.write("Say: My leg!");
    };
    if (key === '\u0072') {
      connection.write("Say: 50 pts to Slytherin!");
    };
  });
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}


let setupInputObj = {
  setupInput
};

module.exports = setupInputObj;
