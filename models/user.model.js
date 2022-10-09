const mongoose = require("mongoose")

//Schema of User
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

//exporting the model
module.exports = mongoose.model("User",UserSchema)