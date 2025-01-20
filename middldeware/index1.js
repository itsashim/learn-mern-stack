import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",function(req,res){
console.log(req.body);
// res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
