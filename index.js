const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const testFolder = './match/';
const files=[];

fs.readdirSync(testFolder).forEach(file => {
  files.push(file);
});



function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}


app.get('/api/hello', (req, res) => {
  let number = between(0,files.length);
  let rawdata = fs.readFileSync("./match/"+files[number]);
  let match = JSON.parse(rawdata);
  res.send(match);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));