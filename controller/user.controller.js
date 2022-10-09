const Validator = require("validator")
const UserModel = require("../models/user.model")

function getAllUsers(req,res){
    UserModel.find(function (err,success){
        if(err){
            console.log(err);
             res.json({
                status : -1,
                msg : "Something is wrong",
                data : "Please try after sometime"
             });
        } else {
            res.json({
                status: 200,
                msg : "User Returned",
                data : success
            })
        }
    })
}

function getUserById(req,res){
    let userId = req.params.userId
    UserModel.findById(userId , function(err,success){
        if(err){
            console.log(err);
            res.json({
                status : -1,
                msg : "Something is Wrong",
                data : "Please try again"
            })
        } else {
            res.json({
                status : 200,
                msg : "User found",
                data : success
            })
        }
    })
}

function getUserByEmail(req,res){
    let email = req.body.email
    UserModel.findOne({"email" : email}, function(err,success){
        if(err){
            console.log(err);
            res.json({
                status : -1 , 
                msg : "Error",
                data : "Please Try again after sometime"
            })
        } else {
            res.json({
                status : 200,
                msg : "User Found",
                data : success
            })
        }
    })
}

module.exports.getAllUsers = getAllUsers
module.exports.getUserById = getUserById
module.exports.getUserByEmail = getUserByEmail