const express = require("express")
const sessionController = require("./controller/session-controller")

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/signup",sessionController.signup)

let port = 9898

app.listen(port,function(){
    console.log("Server stareted on port : " + port);
})