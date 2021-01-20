const express = require("express");

const port = process.env.PORT | 8000;
const app = express();

app.listen(port , () => {
    console.log(`I am running on port ${port}`);
})

