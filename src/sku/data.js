const { sequelize } = require("../../models");
const db = require("../../models");

async function createSku(
  codigo,
  descripcion,
  existencias,
  precio,
  categoria,
  createdAt,
  updatedAt
) {
  let qty;
  if (existencias !== undefined) {
    qty = parseInt(existencias);
  }

  return await db.sequelize.query(
    " INSERT INTO  skus (codigo, descripcion, existencias,precio, categoria,createdAt,updatedAt) VALUES (:codigo, :descripcion, :existencias,:precio,:categoria,:createdAt,:updatedAt)",
    {
      replacements: {
        codigo,
        descripcion,
        existencias,
        precio,
        categoria,
        createdAt,
        updatedAt,
      },
      type: sequelize.QueryTypes.INSERT,
    }
  );
}

async function deleteSku(id) {
  return await db.sequelize.query(" DELETE FROM skus WHERE id = :id ", {
    replacements: {
      id,
    },
    type: sequelize.QueryTypes.DELETE,
  });
}

async function updateSku(id, field, value, updatedAt) {
  return await db.sequelize.query(
    ` UPDATE skus SET ${field}=:value, updatedAt=:updatedAt WHERE id=:id `,
    {
      replacements: {
        id,
        value,
        updatedAt
      },
      type: sequelize.QueryTypes.UPDATE,
    }
  );
}

async function getAllSku() {
    return await db.sequelize.query(
        `SELECT * FROM skus`,
        {
          replacements: {},
          type: sequelize.QueryTypes.SELECT,
        }
      );
}

async function getByIdSku(id) {
    return await db.sequelize.query(
        ` SELECT * FROM skus WHERE id=:id `,
        {
          replacements: {
            id,
          },
          type: sequelize.QueryTypes.SELECT,
        }
      );
}

async function getAllSkuSearched(searchTerm) {
  
  return await db.sequelize.query(
      `SELECT * FROM skus WHERE descripcion LIKE '%${searchTerm}%'`,
      {
        replacements: {searchTerm: searchTerm},
        type: sequelize.QueryTypes.SELECT,
      }
    );
}

module.exports = {
  createSku,
  deleteSku,
  updateSku,
  getAllSku,
  getByIdSku,
  getAllSkuSearched
};
