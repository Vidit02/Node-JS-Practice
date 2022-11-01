const roleModel = require("../models/role.model")

exports.saveRole = function (req,res){
    let role = new roleModel(req.body)
    roleModel.findOne({"rolename" : req.body})
    role.save(function (err,success){
        if(err){
            console.log(err);
            res.json({
                status : -1,
                msg : "Something is Wrong",
                data : "please Try after sometime"
            })
        } else {
            res.json({
                status : 200,
                msg : "Role Saved",
                data : success
            })
        }
    })
}

exports.getAllRoles = function (req, res) {

    roleModel.find(function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Role Ret...",
                data: success
            })
        }
    })
}

 exports.getRoleById = function (req, res) {
    let roleId = req.params.roleId

    roleModel.findById(roleId, function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Role Ret...",
                data: success
            })
        }
    });

}