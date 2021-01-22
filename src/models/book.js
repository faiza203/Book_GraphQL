const { Schema } = require("mongoose");
const moongoose = require("moongoose");
const Schema = moongoose.schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});


module.exports = moongoose.model("Book" , bookSchema)