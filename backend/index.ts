import express from "express";
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Auth is working.");
});

app.post("/login", (req, res) => {
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNTE2MjM5MDIyfQ.E9bQ6QAil4HpH825QC5PtjNGEDQTtMpcj0SO2W8vmag";
  res.send({
    token: jwt,
  });
});

app.post("/logout", (req, res) => {
  res.send({
    logout: "logout",
  });
});

app.get("/users", (req, res) => {
  const userList = [
    {
      id: 1,
      name: "Alex",
      email: "alex@mail.com",
    },
    {
      id: 2,
      name: "Alina",
      email: "alina@mail.com",
    },
  ];
  res.send(userList);
});
