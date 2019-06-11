console.log('Hola')

$(document).ready(function () {
  console.log('Wookie')
   var url = 'https://swapi.co/api/'

   getData(url + 'people/', callback)
 })

 function callback (error, data) {
   if (error) {
     console.log('Hubo un error', error)
   } else {
     for (var i = 0; i < data.results.length; i++) {
       console.log(data.results[i].name)
     }

     if (data.next) {
       getData(data.next, callback)
     }
     // console.log('Todo ok', data)
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