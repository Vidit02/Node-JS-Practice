const express = require("express")
const res = require("express/lib/response")

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


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

app.post("/calc",function(req,res){
    console.log(req.body)
    let n1 = req.body.n1
    let n2 = req.body.n2
    let ans = n1 + n2
    res.json({
        status: 200,
        msg: "Addition done",
        data:ans
    })
})

let port = 9898

app.listen(port,function(){
    console.log("Server stareted on port : " + port);
})