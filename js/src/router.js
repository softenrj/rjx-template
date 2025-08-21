export const router = (app) => {
    app.get("/health", (req, res) => {
        res.json({
            status: "ok",
            uptime: process.uptime(),
            timestamp: Date.now(),
        });
    }),

    app.use('/', (req, res) => {
        res.status(200).json("Welcome to the API")
    })
}