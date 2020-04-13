import "reflect-metadata";
import {createConnection} from "typeorm";
import express = require("express");
import bodyParser = require("body-parser");
import fileUpload = require("express-fileupload")
import path = require('path')

createConnection();

const app = express();
(global as any).__storage = path.join(__dirname, "../storage");;
app.use(express.static('public')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use('/item', require('./routes/item.routes')); 

const server = app.listen(3000, () => {

  const host = server.address().address
  const port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
