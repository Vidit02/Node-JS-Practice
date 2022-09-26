const express = require("express")
const res = require("express/lib/response")

let app = express()

app.get("/",function (req,res){
    res.write("Welcome")
    res.end()
})

app.get("/login",function(req,res){
    res.write("Login yhis is not done")
    res.end()
})

app.get("/signup",function(req,res){
    res.send("Signup with send called")
})

let port = 9898

app.listen(port,function(){
    console.log("Server stareted on port : " + port);
})