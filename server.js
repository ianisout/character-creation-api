const app = require('express')();
const PORT = process.env.PORT || 8080;
const data = require('./data');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get(`/`, (req, res) => {
  res.render('index')
})

app.get(`/:type/:id`, (req, res) => {
  let { type, id } = req.params;
  res.json(data[type][id]);
})

app.listen(PORT);
