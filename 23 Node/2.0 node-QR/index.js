import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr-image.png"));
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("URL is added");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Sonthing went wrong try again");
    } else {
      console.log("Sonthing went wrong try again");
    }
  });
