import request from "supertest";
import app from "../app.js";

describe("Health Check Endpoint", () => {
  it("should return 200 and status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: "ok",
    });
  });
});
