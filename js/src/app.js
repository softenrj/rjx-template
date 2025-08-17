import chalk from "chalk";
import app from "./server.js";
import chalkAnimation from 'chalk-animation';
import logger from "primelogger";

const SPINNER_FRAMES = ['|', '/', '-', '\\'];
let spinnerIndex = 0;
const PORT = process.env.PORT || 8000;

const SERVER_START_MSG = `🚀 Express server started on port: ${PORT}`;

// Start spinner simulation
const startSpinner = (text) => {
  const interval = setInterval(() => {
    const frame = SPINNER_FRAMES[spinnerIndex++ % SPINNER_FRAMES.length];
    process.stdout.write(`\r${chalk.magentaBright(frame)} ${text}`);
  }, 100);
  return () => clearInterval(interval);
};

// Start Server
app.listen(PORT, (err) => {
  if (err) {
    logger.error(err.message);
  } else {
    const stop = startSpinner(`Starting server on port ${PORT}...`);

    // Wait 1s then show fancy message
    setTimeout(() => {
      stop(); // stop spinner
      const rainbow = chalkAnimation.rainbow(SERVER_START_MSG);
      setTimeout(() => rainbow.stop(), 3000); // stop animation after 3s
    }, 1000);
  }
});

