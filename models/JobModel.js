const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        job_id: String,
        user_email: String,
        position: String,
        company: String,
        location: String,
        applied_date: String,
        application_url: String,
        additional_notes: String,
        status: Number
    }
);

const Jobs = mongoose.model("Jobs", jobSchema);
module.exports = Jobs;