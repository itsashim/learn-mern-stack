import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Ashim Rai";
const yourPassword = "ashim226";
const yourAPIKey = "df903fa1-33a3-46a8-86fa-88b89fa619e2";
const yourBearerToken = "94fe2775-ce39-478c-b3f9-c55b9a1dd764";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const data = response.data;
    console.log(data);
    res.render("index.ejs", { content: JSON.stringify(data)});
  }catch(error){
    res.render("index.ejs", { content: error.message });
  } 
});

app.get("/basicAuth", async(req, res) => {
    try{
      const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2",{
        auth: {
          username: yourUsername,
          password: yourPassword
        }
      });
      const data = response.data;
      res.render("index.ejs", { content: JSON.stringify(data)});
      }catch(error){
        res.render("index.ejs", { content: error.message });
    }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.


  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
    const data = response.data;
    res.render("index.ejs", { content: JSON.stringify(data)});
  }catch(error){
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/bearerToken", async (req, res) => {
 try{
  const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42",{
    headers:{
      Authorization: `Bearer ${yourBearerToken}`
    }
  });
  const data = response.data;
  console.log(data)
  res.render("index.ejs", { content: JSON.stringify(data)});
 }catch(error){
  res.render("index.ejs", { content: error.message });
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
