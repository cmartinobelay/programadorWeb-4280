console.log('Hola')
var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var result = getPosition('Fernandez', studentsList)

console.log('La posición del estudiante Fernandez es ' + result)

function getPosition (lastName, studentsList) {
  var student
  var total = 0
  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]

    if (student.lastName === lastName) {
      return i
    }
  }

  return -1
}
