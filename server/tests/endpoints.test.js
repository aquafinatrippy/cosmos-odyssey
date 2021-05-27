import request from "supertest";
import app from "../app.js";
import { jest } from "@jest/globals";

jest.useFakeTimers();

describe("api/prices", () => {
  describe("get all prices from api", () => {
    test("should return all prices", async () => {
      const response = await request(app).get("/api/prices");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("api/reservations", () => {
  describe("get all reservations from api", () => {
    test("should return all reservations", async () => {
      const response = await request(app).get("/api/reservations");
      expect(response.statusCode).toBe(200);
    });
  });
  describe("Reservation post", () => {
    test("Should make post to reservation", async () => {
      const response = await request(app).post("/api/reservations").send({
        firstName: "jest F",
        lastName: "jest L",
        routes: "mars, venus",
        totalPrice: "200€",
        travelTime: 2,
        travel_provider: "jest test company",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
