import { Router, Request, Response } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Base API' });
})

export default apiRouter;
