function addition(a,b) {
    var c = a + b
    console.log("Addition is : " , c)
}

function subtration(a,b){
    var c = a - b
    console.log("Subtration is : " , c)
}

module.exports.add = addition
module.exports.sub = subtration