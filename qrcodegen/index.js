/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {name:'url',type:'input',message: "Paste your url here!"}
  ])
  .then((answers) => {
    console.log(answers.url);
    fs.writeFileSync("saved.txt", answers.url ,'utf-8');
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error.message);
    } else {
      console.log(error.message);
    }
});

