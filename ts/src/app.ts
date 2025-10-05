import express, { Application } from "express";
import morgan from "morgan";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

// 🛡️ Configs
import { helmetConfig } from "./config/halmetConfig.js";
import { corsConfig } from "./config/corsConfig.js";
import { rateLimiter } from "./config/rateLimitConfig.js";

// 📌 Router & Middleware
import { router } from "./router.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { env } from "./config/env.js";

const app = express();
env;

/* -----------------------------------
   🔧 Middleware Stack
----------------------------------- */

// Serve Swagger UI at /docs
/**
 * hit that route on browser
 */
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Logger (development-friendly)
app.use(morgan("dev"));

// Response compression
app.use(compression());

// Security headers (Helmet)
helmetConfig(app);

// CORS setup
corsConfig(app);

// Rate limiting (global or per route)
app.use(rateLimiter);

// Parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* -----------------------------------
   🚏 Routes
----------------------------------- */
router(app);

/* -----------------------------------
   ❌ Error Handling (last middleware)
----------------------------------- */
app.use(errorHandler);

export default app as Application;
