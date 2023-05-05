const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");


const port = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "testing"
    });
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(port, () => console.log(`server is running on port ${port}`));
})
.catch(error => console.log(`mongodb error: ${error}`));