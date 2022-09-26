let http = require("http")

http.createServer(function(req,res){
    if(req.url == "/login"){
        res.write("Login")
    } else {
        res.write("sigfnup")
    } console.log(req.url);
    res.end() 

}).listen(9898)