const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const controller = require("./controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Massive Connected...");
  })
  .catch(err => console.log({ err: "DB not connected" }));

//End points...............................................
app.get("/api/products", controller.get_products);
app.post("/api/product", controller.create);
app.delete("/api/product/:id", controller.delete);
app.put("/api/product/:id", controller.update);
//.........................................................

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}`));
