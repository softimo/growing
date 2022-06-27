require('dotenv').config();
const express = require("express");
const app = express();
const skuRoutes = require('./src/sku/route');
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors())
app.use('/storage', express.static('storage'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//APP.USE ROUTES
app.use('/sku', skuRoutes )//CRUD SKU

app.listen(process.env.API_PORT,
  () => console.log("API corriendo en puerto: ", process.env.API_PORT )
);

