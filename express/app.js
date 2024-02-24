const express = require('express');
const mainHandler = require('./handlers/mainHandler');
const authorizationHandler = require('./handlers/authorizationHandler');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.redirect('/main');
});

app.get('/main', mainHandler.main);

app.get("/converter", mainHandler.uploadPage);

app.get("/authorization", authorizationHandler.auth);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
