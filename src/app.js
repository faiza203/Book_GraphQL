const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");

const port = process.env.PORT | 8000;
const app = express();

app.use("/graphql", graphqlHTTP({
    schema
}));

app.listen(port, () => {
  console.log(`I am running on port ${port}`);
});
