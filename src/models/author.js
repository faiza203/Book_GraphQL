const { Schema } = require("mongoose");
const moongoose = require("moongoose");
const Schema = moongoose.schema;

const authorSchema = new Schema({
  name: String,
  age: String,
});

module.exports = moongoose.model("Author", authorSchema);
