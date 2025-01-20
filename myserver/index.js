import express from "express";

const app = express();

const port = 3000;


app.get("/",function(req,res){
res.send("home");
})


app.get("/about",function(req,res){
    res.send("about");
})

app.get("/page",function(req,res){
    res.send("page");
})
        

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})