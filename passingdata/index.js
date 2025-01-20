import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname+'/views/index.ejs');
});

app.post("/submit", (req, res) => {
  const fname = req.body["fName"] ;
  const lname = req.body["lName"] ;
  const combinedName = fname + lname;
  const nameLen = combinedName.length; 

  res.render(__dirname+'/views/index.ejs',{
    nameLen:nameLen
  })
  // res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
