import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = new Date().getDay();

app.get("/",(req,res)=>{
    let text;
    if(day == 6){
        text = "Today is weekend! Let's enjoy";
    }else{
        text = "Today is weekday! Let's hardwork";
    }
res.render(__dirname + '/views/index.ejs',{webtext: text});
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});