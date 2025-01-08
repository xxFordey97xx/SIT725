let express = require('express');
let app = express();
const path = require('path');
let port = process.env.port || 3000;
require('./dbConnection');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const routes = require('./routers/router');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(() => {
    x=parseInt(Math.random()*10);
    socket.emit('number', x);
    console.log('emitting number ' + x);
  }, 1000)
});

http.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});