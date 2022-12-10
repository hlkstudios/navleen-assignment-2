require("./models/db");

const express = require("express");
const path = require("path");
const expresshandlebars = require("express-handlebars")
const bodyparser = require("body-parser")

const controller = require("./controller/controller")


var app = express();

app.use(bodyparser.urlencoded({

    extended:true
}))

app.use(bodyparser.json())

app.set("views", path.join(__dirname, "/views/"))

app.set("view engine", "hbs")

app.engine("hbs", expresshandlebars.engine({
    
    extname: "hbs", 
    defaultLayout : "mainLayout",
    layoutDir : __dirname+"/views/layout"
}))



app.listen(4000, ()=>{
    console.log("express server started ")
    
})


app.use("/", controller);




