var express = require('express') //llamamos a Express
var mongoose = require('mongoose');

var app = express()   

mongoose.connect('mongodb://localhost/apiheippi', function(err, res){
  if(err) console.log('Error de conexion DB' + err)
  else console.log("Conexion realizada!")
})

var port = process.env.PORT || 5000  // establecemos nuestro puerto

app.get('/', function(req, res) {
    res.send({ mensaje: '¡Hola Mundo!' })   
  })

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)