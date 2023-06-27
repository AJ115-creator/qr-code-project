import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    { message : "type your URL",
    name : "URL"
  },  
])
  .then((answers) => {
    const url=answers.URL;
    var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('qr.png'));
  
  fs.writeFile("NewURL.txt",url, (err) => {
    if(err)throw err;
    console.log("the file has been saved");
});
  })
  .catch((error) => {
    if (error.isTtyError) { 
    } else {
    }
  });
