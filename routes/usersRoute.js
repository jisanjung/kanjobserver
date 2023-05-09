const express = require("express");
const router = express.Router();
const Users = require("../models/UserModel");

// get all
router.get("/", async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not get users from db"
        });
    }
});

// add
router.post("/add", async (req, res) => {
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

module.exports = router;