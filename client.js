const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // receive server data
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: BEN');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  return conn;
}

let connectFunc = {
  connect
}

// console.log('Connecting ...');
// connect();

module.exports = connectFunc;
