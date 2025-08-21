export const errorHandler = (
  err, req, res
) => {
  console.error("❌ Error:", err);

  res.status(err.status ?? 500).json({
    success: false,
    message: err.message ?? "Internal Server Error",
  });
};
