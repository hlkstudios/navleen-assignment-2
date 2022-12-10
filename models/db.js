const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://navleen:7pgsQN3A4F3ab2Gj@navleen.vbivyj3.mongodb.net/todo?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("mongodb connected");
    } else {
      console.log(err + "mongodb error");
    }
  }
);

require("./user_model");
