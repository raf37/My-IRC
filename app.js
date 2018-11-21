/**var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6', { promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));

var apiRouter = require('./routes/book');

var app = express();

// app.use(bodyParser.json);
// app.post('/api/register', (req, res) => {
//     console.log(req.body);
// });
// app.listen(1234, () => console.log('Server listening at 1234'));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });




// "start": "ng build && node ./bin/www",


// app.get('/lol', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//     console.log('a user connected');
// });
//
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2))
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

module.exports = app;

// var express = require('express')
// var bodyParser = require('body-parser')
//
// var app = express()
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
//
// // parse application/json
// app.use(bodyParser.json())
//
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

// POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
    // create user in req.body
// })




// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username)
// })
//
// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//     // create user in req.body
// })*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');

var apiRouter = require('./routes/book');

// var chat = require('./routes/chat');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/my-app')));
app.use('/api', apiRouter);

// app.use('/api/chat', chat);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean-angular6', { promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));


// app.post('/ping', function (req, res) {
//     req.body.text = `${req.body.text} from Nodejs`;
//     res.send(req.body)
// });


// const port = 3000;
//
// app.get('/', (req, res) => res.send('Hello World!'));
//
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//
module.exports = app;