const express = require('express');
const mainHandler = require('./handlers/mainHandler');
const morgan = require('morgan');
const authorizationHandler = require('./handlers/authorizationHandler');
const registerController = require('./public/scripts/registerController');
const loginController = require('./public/scripts/loginController');
const userController = require('./public/scripts/userController');
const path = require('path');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const session = require('express-session');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

const whitelist = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

const accessLogStream = fs.createWriteStream(path.join('./logs/access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

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

app.put('/change-password', userController.changePassword);
app.put('/change-email', userController.changeEmail);

app.delete('/delete-user', userController.deleteUser);

app.get('/errors', mainHandler.errorP);

app.get('/check-auth', (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

app.get('*', (req, res) => {
  res.redirect('/errors');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('New client connected');

  function sendPeriodicMessage() {
    ws.send('Use instruction if you don`t know what to do.');

    setTimeout(() => {
      ws.send('FileType Converter supports only photos and audio.');
    }, 60000);

    setTimeout(() => {
      ws.send('you need login if you want convert files more than 10MB.');
    }, 60000);
  }

  const intervalId = setInterval(sendPeriodicMessage, 60000);

  ws.on('close', function() {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
