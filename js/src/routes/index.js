import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Base API' });
})

export default apiRouter;
