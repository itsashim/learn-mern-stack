import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))  ;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));


const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post("/submit",(req,res)=>{
  res.send(`
    <h1>Combined Response</h1>
    <p>${req.body.street}${req.body.pet}</p>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
