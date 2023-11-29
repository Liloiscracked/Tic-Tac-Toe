var express = require("express")
var bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    res.send("hola");
    //return res.redirect('src/index.html');
}).listen(3000);



console.log("Listening on PORT 3000");