const mongoose = require("mongoose");
    const User = mongoose.model("User")


    var user = new User();
    user.fullname = "test";
    user.email = "test@gmail.com";
    user.phone = "testph";
    user.city = "testcity";
    user.save((err,doc) => {
        if(!err){
            res.redirect("/list")}
        else {console.log("mongodb saving error")}
    })




