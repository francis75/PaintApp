// server.js

require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'us2',
});
// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-realtime-paintapp'));
app.get('/*', function(req,res) {
    
  res.sendFile('index.html', {root: 'dist/angular-realtime-paintapp/'});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/draw', (req, res) => {
    pusher.trigger('painting', 'draw', req.body);
    res.json(req.body);
  });

app.listen(process.env.PORT || 8080);