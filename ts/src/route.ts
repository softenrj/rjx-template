import BaseRouter from '@src/routes';
import { Application, Request, Response } from 'express';

const router = (app: Application): void => {
    app.use('/base', BaseRouter);

    app.use("/api", (req: Request, res: Response) => {
        res.status(200).json({ message: "Welcome to the API" });
    });
}

export default router
