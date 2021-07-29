const mri = require("mri");
const argv = process.argv.slice(2);
let cliArgs = mri(argv);

let options = {
  serialPortName: "/dev/ttyUSB0",
  serialPortNameRate: 9600,
  webSocketPortNumber: 8081
};

let optionKeys = Object.keys(options);

optionKeys.forEach(e => {
  if (cliArgs[e]) {
    options[e] = cliArgs[e];
    console.log(`${e}: ${options[e]}`);
  }
});

const serial_websocket = require("serial-websocket")(options);
serial_websocket.start();