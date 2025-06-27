// install mongoose
// import mongoose
var mongoose = require('mongoose');

// mongoose.connect("url").then(()=> {}).catch(() => {});
mongoose.connect("mongodb+srv://nandhanabijunair3:user@cluster0.0rrgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("db connected")
})
.catch((err) => {
    console.log(err);
})
