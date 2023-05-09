const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const Users = require("./models/UserModel");
const port = 5000;

// middleware
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not get users from db"
        });
    }
});
app.post("/users/add", async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not add user to db"
        });
    }
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(port, () => console.log(`server is running on port ${port}`));
})
.catch(error => console.log(`mongodb error: ${error}`));