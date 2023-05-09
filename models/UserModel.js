const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: String,
        fullname: String
    }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;