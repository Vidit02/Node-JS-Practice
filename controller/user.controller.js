const Validator = require("validator");
const userModel = require("../models/user.model");
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

function updateUser(req,res){
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let userId = req.params.userId

    let user = new UserModel({
        
    })
    UserModel.updateOne({"_id": userId},{$set: {user}})

}

// function updateUser(req,res){
//     let userId = req.params.userId
//     let user
//     userModel.updateOne({"_id":ObjectId(userId)},{$set:{}})
// }

function deleteUser(req,res){
    let userId = req.params.userId
    UserModel.deleteOne({"_id" : userId},function(err,success){
        if(err){
            res.json({
                status:-1,
                msg:"Error",
                data:"Please try again"
            })
        } else {
            res.json({
                status : 200,
                msg : "Deleted",
                data : "User id deleted"
            })
        }
    })
}

module.exports.getAllUsers = getAllUsers
module.exports.getUserById = getUserById
module.exports.getUserByEmail = getUserByEmail
module.exports.deleteUser = deleteUser