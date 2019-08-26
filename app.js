const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// bodyParser

app.use(bodyParser.urlencoded({ extended: false }));

// configurar las vistas

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.use(express.static(path.join(__dirname,'public')));

// rutas
app.use(require('./routes/index'));
app.use(require('./routes/admin'));
app.use(require('./routes/employer'));
app.use(require('./routes/customer'));

// escuchando el puerto

app.listen(3000, () =>{
    console.log('servidor en el puerto 3000');
});