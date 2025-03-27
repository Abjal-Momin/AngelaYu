import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let userInfo = [];
function storeData(req, res, next) {
    userInfo.push(req.body["email"]);
    userInfo.push(req.body["password"]);
    next();
}

app.use(storeData);

app.post("/submit", (req, res) => {
  res.send(`User info is : ${userInfo}`);
});

app.listen(3000, () => {
  console.log("server is live at port 3000");
});
