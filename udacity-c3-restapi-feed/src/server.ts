import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { config } from "./config/config";
import { V0MODELS } from "./controllers/v0/model.index";

const c = config.dev;

(async () => {
  console.log(1);
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen

  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function (req, res, next) {
    console.log(2);

    res.header("Access-Control-Allow-Origin", c.url);
    console.log(7);

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    console.log(2);

    next();
  });

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    console.log(3);

    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(4);

    console.log(`server running ` + c.url);
    console.log(`press CTRL+C to stop server`);
  });
})();
