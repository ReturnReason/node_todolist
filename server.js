const express = require('express');
const app = express();

app.listen('8000', (req, res) => {
  console.log('listening on 8000 port..');
});

app.get('/', (req, res) => {
  res.send('홈페이지 접속');
});
