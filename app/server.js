var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')
/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

var app = express()   

var port = process.env.PORT || 5000  // establecemos nuestro puerto

app.get('/', function(req, res) {
    res.send({ mensaje: '¡Hola Mundo!' })   
  })

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)