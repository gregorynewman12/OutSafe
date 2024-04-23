const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
});