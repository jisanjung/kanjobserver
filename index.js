const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const usersRouter = require("./routes/usersRoute");
const jobsRouter = require("./routes/jobsRoutes");
const port = 5000;

// general middleware
app.use(express.json());

// routes
app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);

// db connect and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // connect to db
    console.log("connected to mongodb");
    // then start server
    app.listen(port, () => console.log(`server is running on port ${port}`));
})
.catch(error => console.log(`mongodb error: ${error}`));