const express = require("express");

const sapController = require("../controllers/sap_controller");

const router = express.Router();

router.post("/petStore", sapController.petStore);

module.exports = router;
