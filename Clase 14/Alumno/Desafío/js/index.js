$(document).ready(function(){
  console.log('Hola')
})

// var coverNode = $('#1, #2, #3')
// coverNode.click(function () {
//   console.log('Click en el cover 1 y empiezo a ocultar')
//   coverNode.hide(3000, function () {
//     console.log('Se terminó de animar')
//     coverNode.parent().hide()
//     coverNode.parent().show()
//     coverNode.show(1000)
//   })
//   console.log('Llame a la función que oculta')
// })

var deleteButton = $('.btn-danger')

deleteButton.click(function(){
  var trNode = $(this).parent().parent()
  trNode.hide(300, function(){
    trNode.remove(

    )
})
})