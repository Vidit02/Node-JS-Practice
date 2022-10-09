const validator = require("validator")
const UserModel = require("../models/user.model")

function signup(req,res){
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let errors = {}
    let isError = false

    //validation in express using validator(npm)
    if(firstname == undefined || validator.isEmpty(firstname)){
        isError = true
        errors.firstNameError = "Please enter the first name"
    }  

    if(lastname == undefined || validator.isEmpty(lastname)){
        isError = true
        errors.lastNameError = "Please enter the last name"
    }

    if (email == undefined || validator.isEmpty(email)){
        isError = true
        errors.emailError = "Please enter a valid email"
    }
    if (password == undefined || validator.isEmpty(password)){
        isError = true
        errors.passwordError = "Please enter a valid password"
    }


    //initiating the response using a json response
    if(isError){
        res.json({
            status: -1,
            data: req.body,
            err: errors,
            msg: "Please Correct Error(s)"
        })
    } else {
       //Here data wil be stored in db (mongodb)
       let user = new UserModel({
            "firstname" : firstname,
            "lastname" : lastname,
            "email" : email,
            "password" : password
       })

       //now we will use the save method to store in db
       user.save(function (err,success){
            if(err){
                res.json({
                    msg : "Something is Wrong",
                    status : -1,
                    data : req.body,
                    error : err
                })
            } else {
                res.json({
                    msg : "Signup done...",
                    status : 200,
                    data : success
                })
            }
       })
    }
}

module.exports.signup = signup