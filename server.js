const express = require("express");
const cors= require("cors");
const app = express ();
app.get ("/", (req, res)=>{
    res.send({res:"success"})
})
app.use(cors());  //cors will be enabledn
app.post("/adduser", (req, res)=>{
    console. log(req.query);
    res.send("Success")

    
})

app. put ("/edituser/:id", (req, res) =>{
    console. log(req.params);
    res.send ("Success")
})
app. listen(5000);