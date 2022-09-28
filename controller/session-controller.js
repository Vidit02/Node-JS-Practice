const validator = require("validator")

function signup(req,res){
    let firstname = req.body.firstname
    let email = req.body.email
    let password = req.body.password
    let errors = {}
    let isError = false

    //validation in express using validator(npm)
    if(firstname == undefined || validator.isEmpty(firstname)){
        isError = true
        errors.firstNameError = "Please enter the name"
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
        res.json({
            status: 200,
            msg: "Signup completed",
            data: req.body
        })
    }
}

module.exports.signup = signup