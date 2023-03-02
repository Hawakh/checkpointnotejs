const fs = require('fs');
let data="Hello Node"
fs.writeFile('welcome.txt', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File written successfully\n');
    console.log("The written has the following contents:");
      console.log(fs.readFileSync("welcome.txt", "utf8"));
    }
});