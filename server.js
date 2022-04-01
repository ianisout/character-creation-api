const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

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

app.get(`/:type/:id`, (req, res) => {
  let { type, id } = req.params;
  res.json(jsonData[type][id]);
});

app.listen(PORT);
