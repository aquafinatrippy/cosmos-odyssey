import request from "supertest";
import app from "../app.js";
import {jest} from '@jest/globals';

describe("Get api/prices", () => {
  describe("get all prices from api", () => {
    test("should return all prices", async () => {
      const response = await request(app).get("/api/prices");
      expect(response.statusCode).toBe(200);
    });
  });
});
