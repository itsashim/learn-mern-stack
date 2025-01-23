import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "94fe2775-ce39-478c-b3f9-c55b9a1dd764";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  const secret = req.body.secret;
  const score = req.body.score;
  const data = {
    secret: secret,
    score: score
  }
  console.log(data);
  try{
    const response = await axios.post(API_URL + "/secrets", data, config); 
    console.log(response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) }); 
  }catch(err){
    res.render("index.ejs", { content: err.message }); 
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  const data = {
    secret: secret,
    score: score
  }
  try{
    const response = await axios.put(API_URL+"/secrets/"+searchId,data,config );
    res.render("index.ejs", { content: JSON.stringify(response.data) }); 
  }catch(err){
    res.render("index.ejs", { content: err.message }); 
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  const data = {
    secret: secret,
    score: score
  }
  try{
    const response = await axios.patch(API_URL+"/secrets/"+searchId,data,config );
    res.render("index.ejs", { content: JSON.stringify(response.data) }); 
  }catch(err){
    res.render("index.ejs", { content: err.message }); 
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;

  try{
    const response = await axios.delete(API_URL+"/secrets/"+searchId,config );
    res.render("index.ejs", { content: JSON.stringify(response.data) }); 
  }catch(err){
    res.render("index.ejs", { content: err.message }); 
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
