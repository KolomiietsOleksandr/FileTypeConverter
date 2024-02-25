const express = require('express');
const mainHandler = require('./handlers/mainHandler');
const authorizationHandler = require('./handlers/authorizationHandler');
const registerController = require('./public/scripts/registerController');
const loginController = require('./public/scripts/loginController');
const userController = require('./public/scripts/userController');
const path = require('path');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const session = require('express-session');;

const app = express();
const port = 3000;

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/login', loginController.loginUser);

app.get("/register", authorizationHandler.refisterRef);

app.post('/register', registerController.registerUser);

app.get('/profile', userController.getUserProfile);

app.get('/check-auth', (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
