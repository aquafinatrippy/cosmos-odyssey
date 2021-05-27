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

export default app;
