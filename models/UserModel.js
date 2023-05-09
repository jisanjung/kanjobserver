const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        user_id: String,
        email: String,
        username: String,
        fullname: String
    }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;