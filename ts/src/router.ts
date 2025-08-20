import { Application, Request, Response } from "express";

export const router = (app: Application) => {
    app.get("/health", (req, res) => {
        res.json({
            status: "ok",
            uptime: process.uptime(),
            timestamp: Date.now(),
        });
    }),

    app.use('/', (req: Request, res: Response): void => {
        res.status(200).json("Welcome to the API")
    })
}