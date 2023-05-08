const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        job_id: String,
        user_id: String,
        position: String,
        company: String,
        location: String,
        applied_date: String,
        application_url: String,
        additional_notes: String,
        status: Number
    }
);

const JobModel = mongoose.model("JobModel", jobSchema);
module.exports = JobModel;