import express from "express";
const app = express();
const port = 5000;

app.post("/api/login", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
