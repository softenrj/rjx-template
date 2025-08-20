import { Application } from "express";
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000'];

export const corsConfig = (app: Application) => {
    app.use(cors({ allowedHeaders: allowedOrigins, credentials: true }))
}