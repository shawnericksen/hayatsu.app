const express = require('express')

const app = express();
const PORT = 3000;

app.get('/*', (req, res) => {
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${PORT}`);
});
