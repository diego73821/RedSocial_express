'use strict'

var mongoose = require('mongoose');
var app = require('./app');
// var port = 3800;
var port = process.env.PORT || 3800



//Conexion Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social')
.then(()=> {
    console.log('La conexion a BD se ha realizado correctamente')

    //Crear servidor
    app.listen(port, ()=> {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
})
.catch(err => console.log(err));