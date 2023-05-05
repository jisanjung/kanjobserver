const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "testing"
    });
});

mongoose.connect("mongodb+srv://kanjob:hey123@kanjobcluster.0tah6zy.mongodb.net/KanJobDB?retryWrites=true&w=majority")
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(port, () => console.log(`server is running on port ${port}`));
})
.catch(error => console.log(`mongodb error: ${error}`));