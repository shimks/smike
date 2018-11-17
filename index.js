// This application is no way in any shape or form ready to be used for
// production. It is merely a hack and does not employ best practices.

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const dataRepository = [];

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const body = req.body;
  if (dataRepository.length === 0) {
    body.isFirst = true;
  }
  dataRepository.push(body);
  res.send(body);
});
app.get('/', (req, res) => {
  res.send(dataRepository);
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
