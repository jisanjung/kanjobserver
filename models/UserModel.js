const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        user_id: String,
        email: String,
        username: String,
        fullname: String
    }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;