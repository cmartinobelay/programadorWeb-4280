console.log('Hola')

var student = {
  firstName: 'Simone',
  lastName: 'Velay',
  dni: 35377333,
  email: 'juan@gmail.com'
}

function createStudentNode(newStudent) {
   var linode = document.createElement ('li')


linode.id = newStudent.dni
linode.className = "list-group-item" 
var fullName = ''

if (newStudent.firstName && newStudent.lastName){
  fullName = newStudent.firstName + ', ' + newStudent.lastName
} else if (newStudent.firstName){
  fullName = newStudent.firstName
} else if (newStudent.lastName){
  fullName = newStudent.lastName
}


linode.innerHTML =
'<h1>' +
fullName +
'</h1><h3>DNI: ' +
newStudent.dni +
'</h3><p>Email: '+
newStudent.email +
'</p>'

return linode
}

var studentNode = createStudentNode (student)
console.log (studentNode)
