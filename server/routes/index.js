const express = require("express");
// const mealPrepRouter = require("./mealPrep_routes");
// const authRouter = require("./auth_routes");
const sapRouter = require("./sap_routes");

const apiRouter = express.Router();

// apiRouter.use("/mealPrep", mealPrepRouter);
// apiRouter.use("/auth", authRouter);
apiRouter.use("/sap/", sapRouter);

module.exports = apiRouter;
