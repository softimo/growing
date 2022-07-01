const express = require("express");
const app = express();
const {
  createSku,
  deleteSku,
  updateSku,
  getAllSku,
  getByIdSku,
} = require("./data");

async function createSkuController(req, res) {
  const { codigo, descripcion, existencias, precio, categoria } = req.body;

  const createdAt = new Date();
  const updatedAt = new Date();

  await createSku(codigo, descripcion, existencias,precio, categoria, createdAt, updatedAt);

  return res.status(200).send({
    message: "SKU generado correctamente",
  });
}
async function deleteSkuController(req, res) {
  const { id } = req.query;

  await deleteSku(id);

  return res.status(200).send({
    message: "SKU eliminado correctamente",
  });
}
async function updateSkuController(req, res) {
  const { id, changes } = req.body;
  const updatedAt = new Date();
  try {
    for (const k of changes) {
      let field = k.field;
      let value = k.value;
      await updateSku(id, field, value, updatedAt);
    }
    return res.status(200).send({
      message: "SKU actualizado correctamente",
    });
  } catch(e) {
    console.log(e)
    return res.status(403).send({
      message: "Ha ocurrido un error en la actualizacion de datos",
    });
  }
}
async function getAllSkuController(req, res) {
  let SKUlist = await getAllSku();

  return res.status(200).send({
    data: SKUlist,
  });
}
async function getByIdSkuController(req, res) {
  const { id } = req.query;

  const data = await getByIdSku(id);

  return res.status(200).send({
    data: data,
  });
}
module.exports = {
  createSkuController,
  deleteSkuController,
  updateSkuController,
  getAllSkuController,
  getByIdSkuController,
};
