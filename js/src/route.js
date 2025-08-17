import BaseRouter from './routes/index.js';

const router = (app) => {
    app.use('/base', BaseRouter);

    app.use("/api", (req, res) => {
        res.status(200).json({ message: "Welcome to the API" });
    });
}

export default router
