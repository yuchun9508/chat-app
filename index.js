const express = require('express');
const app = express();
const PORT = 4000;

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
