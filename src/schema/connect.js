const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected with mongodb");
  })
  .catch((e) => {
    console.log("Not Connection");
  });
