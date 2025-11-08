const express = require('express');
// const path = require('path');
const app = express();
const port = 1234;
const host = "0.0.0.0";

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});