const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Exonomy!');
});

app.listen(port, () => {
  console.log(`Exonomy app listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Exonomy!');
});

app.listen(port, () => {
  console.log(`Exonomy host app listening at http://localhost:${port}`);
});
