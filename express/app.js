const express = require('express');
const mainHandler = require('./handlers/mainHandler');
const authorizationHandler = require('./handlers/authorizationHandler');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

connectDB();

app.get('/', (req, res) => {
  res.redirect('/main');
});

app.get('/main', mainHandler.main);

app.get("/converter", mainHandler.uploadPage);

app.get("/login", authorizationHandler.loginRef);

app.get("/register", authorizationHandler.refisterRef);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
