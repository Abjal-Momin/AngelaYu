import express from "express";
const app = express();
const user = [];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use(express.json());

app.post("/register", (req, res) => {
  const name = req.body.username;
  res.send(`<h1>${name}</h1>`);
});
app.put("/user/afzal", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/afzal", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/afzal", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("server is live at port 3000");
});
