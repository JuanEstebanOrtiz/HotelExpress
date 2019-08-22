const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const alert = require('alert-node');

// Init App
const app = express();

const routes = require('./routes/index.js')
const routes = require('./routes/admin.js')

// Load View Engine
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Rutas
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(app.get('port'), () =>{
    console.log('sevidor en puerto', app.get('port'));
});