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
router.get("/:id", async (req, res) => {
    const jobId = req.params.id;
    try {
        const job = await Jobs.findOne({ job_id: jobId });
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `there was an issue retrieving job #${jobId}`
        });
    }
});

// add
router.post("/add", async (req, res) => {
    try {
        const jobCount = await Jobs.count();
        const modifiedJob = req.body;
        if (jobCount < 1) {
            // if this is the first job that is being added
            modifiedJob.job_id = 1;
        } else {
            // there is at least one job
            const lastInsertedJob = await Jobs.find({}).sort({_id:-1}).limit(1);
            const lastJobId = lastInsertedJob[0].job_id;
            modifiedJob.job_id = lastJobId + 1;
        }
        const job = await Jobs.create(modifiedJob);
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "could not add job to db"
        });
    }
});

// update
router.patch("/update/:id", async (req, res) => {
    const jobId = req.params.id;
    const jobChanges = req.body;
    try {
        const job = await Jobs.findOne({ job_id: jobId });
        if (job) {
            const updatedJob = await Jobs.findOneAndUpdate({ job_id: jobId }, { $set: jobChanges }, { new: true });
            res.status(200).json(updatedJob);
        } else {
            res.status(404).json({
                message: `job #${jobId} does not exist`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `could not edit job #${jobId}`
        });
    }
});

// delete

module.exports = router;