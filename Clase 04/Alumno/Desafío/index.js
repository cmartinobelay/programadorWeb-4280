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

var result = getPosition('Fernandez', students)

console.log('La posición del estudiante Fernandez es ' + result)

function getPosition (lastName, studentsArray) {
  var student
  var total = 0
  for (var i = 0; i < studentsArray.length; i++) {
    student = studentsArray[i]

    if (student.lastName === lastName) {
      return i
    }
  }

  return -1
}
