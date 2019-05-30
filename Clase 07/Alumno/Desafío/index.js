console.log('Hola')

var studentsList = localStorage.getItem('studentList')
console.log(studentsList)

var stringifiedstudentList = JSON.stringify(studentsList)
console.log(stringifiedstudentList)

var parsedStudentList = JSON.parse(stringifiedstudentList)
console.log(parsedStudentList)

if (parsedStudentList.length){
  console.log('Tiene ' +parsedStudentList.length)
} else{
  console.log('Lista vacia')
}