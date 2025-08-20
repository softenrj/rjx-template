import helmet from "helmet";
import { Express } from "express";

export const helmetConfig = (app: Express) => {
  // Apply base helmet config
  app.use(
    helmet({
      hidePoweredBy: true,
      noSniff: true,
      frameguard: { action: "deny" },
      hsts: {
        maxAge: 60 * 60 * 24 * 180, // 180 days
        includeSubDomains: true,
        preload: true,
      },
      xssFilter: true,
      crossOriginEmbedderPolicy: false, // safer for dev
      crossOriginResourcePolicy: { policy: "cross-origin" },
    })
  );

  // Apply CSP only in production
  if (process.env.NODE_ENV === "production") {
    app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "https:"],
          connectSrc: ["'self'", "https://api.myapp.com"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      })
    );
  }
};
