//paquetes modulos
var express = require('express')
var app = express()
const cors =  require('cors')
// Puerto 3000 variable de entorno variable 

app.set("port",process.env.PORT || 3000) 

//middlewears  transformacion de java a json uso de funcion // doficain de url
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// rutas
app.use(require("./routes/routes"))

//configurar ejecucion del servidor


app.get('/', function (req, res) {
  res.send('hello world')
})


app.listen(app.get("port"))

console.log("La direccion de acceso es:\nhttp://localhost:"+app.get("port"))

// produccion vercel uso de app
module.exports = app 