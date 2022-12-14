const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const router = require("./app-route")

const sessionController = require("./controller/session-controller")
const userController = require("./controller/user.controller")

let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes 
app.use("/user",router)

//urls 
// app.post("/signup",sessionController.signup)
// app.get("/users",userController.getAllUsers)
// app.get("/users/:userId",userController.getUserById)
// app.post("/users",userController.getUserByEmail)
// app.delete("/usersdel/:userId",userController.deleteUser)
// app.put("/users/:userId",userController.updateUser)

let port = 9898

app.listen(port,function(){
    console.log("Server stareted on port : " + port);
})

mongoose.connect('mongodb://localhost:27017/basicmongo');