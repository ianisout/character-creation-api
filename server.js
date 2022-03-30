const app = require('express')();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors())
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const data = require('./data');

app.get(`/`, (req, res) => {
  res.render('index')
})

app.get(`/test`, (req, res) => {
  res.render('test')
})

app.get(`/:type/:id`, (req, res) => {
  let { type, id } = req.params;
  res.json(data[type][id]);
})

app.listen(PORT);
