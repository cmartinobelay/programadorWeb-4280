console.log('Hola')
function getLocalList (key) {
  if(typeof key ==='string'){
    var traeLoQueEstaEnElLocal = localStorage.getItem(key)
    if(traeLoQueEstaEnElLocal){
      var parsedtraeLoQueEstaEnElLocal = JSON.parse(key)
      return parsedtraeLoQueEstaEnElLocal
    } else {
      return []
    }

  }
}

var studentsList = getLocalList('studentsList')

if (studentsList) {
 
  console.log(studentsList)