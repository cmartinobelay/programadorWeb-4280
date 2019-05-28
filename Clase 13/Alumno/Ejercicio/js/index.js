$(window).keydown(keyDownPress)

var counter = 0



function keyDownPress (event) {
  var keyCode = event.keyCode
  console.log(keyCode)

  switch (keyCode) {
    case 13: 
    counter = 0      
      break
    case 38:
      counter++      
      break
    case 40:
      counter--
      break
  }
  $('#counter').html(counter)
}