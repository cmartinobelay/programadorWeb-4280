$(document).ready(function () {
  console.log('Wookie')

  var url = 'https://swapi.co/api/'

  console.log('Empiezo a pedir data')

  getData(url + 'planets/3/', callback)

  // getData(url + 'starships/3/', callback)

  console.log('Termino de pedir data')
})

function callback (error, data) {
  var planetNameNode = $('#planet-name')
  var planetClimate = $('#planet-climate')
  if (error) {
    console.log('Hubo un error', error)
  } else {
    planetNameNode.html(data.name)
    planetClimate.html(data.climate)
    console.log('Todo ok', data.name, data.climate)
  }
}

function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}
