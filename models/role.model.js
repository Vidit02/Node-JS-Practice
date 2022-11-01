var mongoose = require("mongoose")

var RoleSchema = new mongoose.Schema({
    rolename : {
        type : String,
        require : true,
        max : 15
    }
})

module.exports = mongoose.model("role",RoleSchema)