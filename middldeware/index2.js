import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
