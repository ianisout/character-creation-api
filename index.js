const app = require('express')();
const PORT = process.env.PORT || 8080;
const data = require('./data');

app.get(`/:type/:id`, (req, res) => {
  let { type, id } = req.params;
  res.json(data[type][id]);
})

app.listen(PORT);
