import app from "./app.js";
import { ENV } from "./config/env.js";
import { logger } from "./config/loggerConfig.js";


// 🚀 Start the server and listen for incoming requests
app.listen(ENV.PORT, () => {
  logger.color('magentaBright', `✅ Server is running on http://localhost:${ENV.PORT}`)
});
