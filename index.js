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
  dataRepository.push(body);
  fs.writeFileSync('./db.json', JSON.stringify(dataRepository));
  res.send(body);
});
app.get('/:entryNumber', (req, res) => {
  const entryNumber = req.params.entryNumber;
  console.log(entryNumber);
  console.log(dataRepository[entryNumber]);
  res.send(dataRepository[entryNumber]);
});

app.listen(8080, () => {
  console.log('app is running at localhost:8080');
});
