import dotenv from "dotenv";
import path from "path";

// Pick correct file based on NODE_ENV
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.prod"
    : process.env.NODE_ENV === "test"
    ? ".env.test"
    : ".env.dev";

// Load env file
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? 3000,
};
