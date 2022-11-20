import * as express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  req.headers["content-type"] === "application/json";
  req.headers["authorization"] === "Bearer";

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
