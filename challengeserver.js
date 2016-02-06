var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomPrefix = faker.name.prefix();
  var randomName = faker.name.findName();
  var randomContent = faker.commerce.product();
  var randomDate = faker.date.weekday() + " " + faker.date.month();
  var randomImage = faker.image.avatar();
  return {
    id: randomPrefix,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage
  }
}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);