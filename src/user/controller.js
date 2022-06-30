//SOLO SE CAMBIARON LOS NOMBRES DE LAS FUNCIONES

const express = require("express");
const app = express();
const {
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
  getByIdUser,
} = require("./data");

async function createUserController(req, res) {
  const { codigo, descripcion, existencias } = req.body;

  const createdAt = new Date();
  const updatedAt = new Date();

  await createUser(codigo, descripcion, existencias, createdAt, updatedAt);

  return res.status(200).send({
    message: "SKU generado correctamente",
  });
}
async function deleteUserController(req, res) {
  const { id } = req.query;

  await deleteUser(id);

  return res.status(200).send({
    message: "SKU eliminado correctamente",
  });
}
async function updateUserController(req, res) {
  const { id, changes } = req.body;
  const updatedAt = new Date();
  try {
    for (const k of changes) {
      let field = k.field;
      let value = k.value;
      await updateUser(id, field, value, updatedAt);
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
async function getAllUserController(req, res) {
  let SKUlist = await getAllUser();

  return res.status(200).send({
    data: SKUlist,
  });
}
async function getByIdUserController(req, res) {
  const { id } = req.query;

  const data = await getByIdUser(id);

  return res.status(200).send({
    data: data,
  });
}
module.exports = {
  createUserController,
  deleteUserController,
  updateUserController,
  getAllUserController,
  getByIdUserController,
};
