import express from "express";

const app = express();

app.get("/", (req, res) => {
  // new Date("March 23, 2025 11:13:00");
  // new Date("March 26, 2025 11:13:00");

  const today = new Date("March 26, 2025 11:13:00");
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    day: type,
    qote: adv,
  });
});

app.listen(3000, () => {
  console.log("Server is live at port 3000");
});
