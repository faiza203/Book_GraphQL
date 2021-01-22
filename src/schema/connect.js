const mongoose = require("moongoose");

mongoose
  .connect("mongodb://localhost:27017/books", {})
  .then(() => {
    console.log("Connected with mongodb");
  })
  .catch((e) => {
    console.log("Not Connection");
  });
