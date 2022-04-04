const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
const PORT = process.env.PORT || 8080;


app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const jsonData = require('./data');
const dataStringified = JSON.stringify(jsonData);

app.get(`/`, (req, res) => {
  res.render('index', { jsonData, dataStringified });
});

app.get(`/test`, (req, res) => {
  res.render('test');
});

app.get(`/:type`, (req, res) => {
  let { type } = req.params;
  res.json(jsonData[type]);
});

app.listen(PORT);
