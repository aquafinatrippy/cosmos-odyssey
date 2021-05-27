const app = require("../app");
const supertest = require("supertest");
const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

// beforeAll(async (done) => {
//   const url = process.env.MONGODB_URI;
//   await mongoose.connect(url, { useNewUrlParser: true });
//   done();
// });

// afterAll(async (done) => {
//   // Closing the DB connection allows Jest to exit successfully.
//   try {
      
//     await mongoose.connection.close();
//     done();
//   } catch (error) {
//     console.log(error);
//     done();
//   }
//   // done()
// });

test("It adds two numbers", () => {
  expect(1 + 1).toBe(2);
});

describe("Get all prices", () => {
  it("should get all prices", async () => {
    const res = await request(app).get("/api/prices");

    expect(res.statusCode).toEqual(200);
  });
});

// describe("Get all prices", () => {
//   it("should get all prices", async () => {
//     await request(app)
//       .get("/api/prices")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });
// });

// it('Gets the prices endpoint', async done => {
//     const res = await request('/api/prices')

//     expect(res.status).toBe(200)
//     done()
// })

// describe("Get third party api data", function () {
//   it("Should contain json list of prices", function (done) {
//     request(app)
//       .get("/api/prices")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });
