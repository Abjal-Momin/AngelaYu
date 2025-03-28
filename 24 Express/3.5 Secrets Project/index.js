//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

let authorized = false;

function checkPass(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    authorized = true;
  }
  next();
}

app.use(checkPass);
app.post("/check", (req, res) => {
  if (authorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(3000, () => {
  console.log("Server is live at port 3000");
});
