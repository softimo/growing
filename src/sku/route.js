const express = require("express");
const app = express();

const {
  createSkuController,
  deleteSkuController,
  updateSkuController,
  getAllSkuController,
  getByIdSkuController,
} = require("./controller");

app.post("/create", createSkuController);
app.get("/list", getAllSkuController);
app.get("/getone", getByIdSkuController);
app.put("/update", updateSkuController);
app.delete("/delete", deleteSkuController);

module.exports = app;
