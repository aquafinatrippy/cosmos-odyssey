import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

export default app;
