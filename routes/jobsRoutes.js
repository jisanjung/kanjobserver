const express = require("express");
const router = express.Router();
const Jobs = require("../models/JobModel");

// get all
router.get("/", async (req, res) => {
    try {
        const jobs = await Jobs.find({});
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "there was an issue retrieving jobs"
        });
    }
});

// get one

// add

// update

// delete

module.exports = router;