// This application is no way in any shape or form ready to be used for
// production. It is merely a hack and does not employ best practices.

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const dataRepository = require('./db.json');

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const body = req.body;
  if (dataRepository.length === 0) {
    body.isFirst = true;
  }
  dataRepository.unshift(body);
  fs.writeFileSync('./db.json', JSON.stringify(dataRepository));
  res.send(body);
});
app.get('/:entryNumber', (req, res) => {
  const entryNumber = req.params.entryNumber;
  const entry = dataRepository[dataRepository.length - 1 - entryNumber];
  //   console.log(entry);
  res.send(entry);
});

app.listen(8080, () => {
  console.log('app is running at localhost:8080');
});
