const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://ezderruby:#kimtaehyung@95@cluster0.esbl3wu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
