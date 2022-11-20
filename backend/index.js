"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require("cors");
const app = (0, express_1.default)();
const port = 5000;
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/login", (req, res) => {
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNTE2MjM5MDIyfQ.E9bQ6QAil4HpH825QC5PtjNGEDQTtMpcj0SO2W8vmag";
    res.send({
        token: jwt,
    });
});
app.listen(port, () => {
    console.log(`Auth app listening on port ${port}`);
});
