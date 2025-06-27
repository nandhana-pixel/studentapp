var express = require('express');
var port = 3005;
require("./db");
var student = require("./model");
var cors = require("cors");
//initializing
var app = express();
//middleware
app.use(express.json());
app.use(cors());

//Api






app.post("/",(req,res) => {
    try {
        student(req.body).save();
        res.send("Student data added successfully");
    } catch (error) {
        res.send(error);
        
    }
});

// api to get data from db
// async and await arev pairs

app.get('/',async(req,res) =>{
    try {
         var data =  await student.find()
         res.send (data)
    } catch (error) {
        res.send(error);
        
    }
})

// api to delete a particular document from the collection
app.delete('/:id',async(req,res) => {
    try {
          await student.findByIdAndDelete(req.params.id)
          res.send("Data deleted")
    } catch (error) {
        res.send(error);
        
    }
})

// api to update a particular docuemnt 
app.put('/:id',async(req,res) =>{
    try {
           await student.findByIdAndUpdate(req.params.id,req.body);
           res.send("Data updated")
    } catch (error) {
        res.send(error);
        
    }
})

app.listen(port,() => {
    console.log(`Server is up and  running in port ${port}`);
});