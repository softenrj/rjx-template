import { Request, Response } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
) => {
  console.error("❌ Error:", err);

  res.status(err.status ?? 500).json({
    success: false,
    message: err.message ?? "Internal Server Error",
  });
};
