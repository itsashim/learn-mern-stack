import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const apiKey = "7cc018e210d166d0109a72c1a40a5587";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",async (req,res)=>{
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${apiKey}`);
        const data = response.data;
        console.log(data);
        res.render("index.ejs",{data:data});
    }catch(err){
        console.log(err);
    }
})


app.listen(port,(req,res)=>{
    console.log("server is running" + port);
});

