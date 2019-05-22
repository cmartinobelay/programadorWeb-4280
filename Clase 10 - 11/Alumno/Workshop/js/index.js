console.log('Segundo workshop')

// Busco si hay algo en el LS (es la student list que aparece en la pantalla) y sino hay me devuelve un Array vacio
var studentsList = getLocalList('list') // es la fuente de la verdad. Esta tiene que ser unica y es donde comparo, es la data (que me la puede dar el usurio, el servido) que la dejo guardada en un lugar asi se me facilita la busqueda

// Busco el campo nombre y DNI en el DOM y el botón agregar
var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
var lastNameInput = document.getElementById('lastName')
var emailInput = document.getElementById('email')
var deleteDniInput = document.getElementById('deleteDni')
var addStudentButton = document.getElementById('addStudentButton')
var deleteStudentButton = document.getElementById('deleteStudentButton')
var mainListNode = document.getElementById('mainList')
var searchStudentButton = document.getElementById('searchStudentButton')
var searchText = document.getElementById('searchText')
var searchList = document.getElementById('searchList')

// Carga incial de los elementos en el DOM
for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var liStudent = createStudentNode(student)
  mainListNode.appendChild(liStudent)
}

// Respondo al evento on blur con la función que valida el campo nombre y DNI
firstNameInput.onblur = validateRequired
dniInput.onblur = validateDni
emailInput.onblur = validateRequired

// Con el botón validado llamo a la función que agrega el estudiante
addStudentButton.onclick = addStudent
deleteStudentButton.onclick = deleteStudent
searchStudentButton.onclick = searchStudentIndexByText
searchText.onclick = searchStudentIndexByText

function searchStudentIndexByText () {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.firstName === text || student.lastName === text) {
      index = i
      break
    }
  }
  return index
}

function includesText () {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()

    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function deleteStudent () {
  // Busco el valor en input a eliminar
  var dniValue = deleteDniInput.value

  if (dniValue) {
    // Busco el indice en memoria
    var index = searchStudentIndexByDni(dniValue, studentsList)

    if (index !== -1) {
      // Elimino en memoria (es la student list que aparece en la pantalla)
      studentsList.splice(index, 1)

      // Actualizo la info del local storage con la info en memoria
      setLocalList('list', studentsList)

      var liNode = document.getElementById(dniValue)

      mainListNode.removeChild(liNode)

      deleteDniInput.value = ''
    } else {
      // alert('Usuario NO existente')
      // deleteDniInput.value = ''
    }
  }
}

function addStudent () {
  // Levanto los valores ya validados del form
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value
  var lastName = lastNameInput.value
  var emailValue = emailInput.value

  // Creo un objeto estudiante temporal
  var student = {
    firstName: firstNameValue,
    dni: dniValue,
    lastName: lastNameValue,
    email: emailValue
  }

  // Agrego el estudiante en memoria
  studentsList.push(student)

  // Cero el nodo estudiante
  var liStudent = createStudentNode(student)

  // Agrego el nodo a la lista del DOM
  mainListNode.appendChild(liStudent)

  // Actualizo la info del local storage con la info en memoria
  setLocalList('list', studentsList)

  // Limpiamos el formulario, los valores en String vacío
  firstNameInput.value = ''
  dniInput.value = ''
  lastNameInput.value = ''
  emailInput.value = ''

  // Saco las clases validas
  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')
  lastNameInput.remove('is-valid')
  emailInput.remove('is-valid')

  // Vuelvo a deshabilitar el botón
  addStudentButton.disabled = true
  deleteStudentButton.disabled = true
  searchStudentButton.disabled = true
}

function validateEmailField (event) {
  var inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

function validateDni (event) {
  // Encuetro que nodo disparó el evento blur
  var inputNode = event.target

  // Busco que valor tenía el nodo en ese momento
  var value = inputNode.value

  // Trato de convertir a número
  var parsedValue = parseInt(value, 10)

  // Verifico si existe el DNI en los datos guardados en LS
  var dniExists

  if (searchStudentIndexByDni(value, studentsList) !== -1) {
    dniExists = true
  } else {
    dniExists = false
  }

  if (!value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    // Caso invalido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    // Caso valido
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }

  validateAddButton()
}

function validateRequired (event) {
  // Encuetro que nodo disparó el evento blur
  var inputNode = event.target

  // Busco que valor tenía el nodo en ese momento
  var value = inputNode.value

  if (!value) {
    // Caso invalido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    // Caso valido
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }

  validateAddButton()
}

// Función para validar ti todos los campos son validos y habilitar el botón
function validateAddButton () {
  // Busco todos los campos válido
  var validInputs = document.getElementsByClassName('is-valid')

  if (validInputs.length !== 2) {
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}

/**
 * setLocalList es una función que guardar un Array en formato
 * JSON en el localStorage
 * @param {string} key 
 * @param {Array} list 
 */
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

/**
 * getLocalList es una función que devuelve un Array guardado en el 
 * localStorage en formato JavaScript
 * @param {string} key 
 * @returns {Array}
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

/**
 * createStudentNode es una función que devuelve un nodo li
 * con los datos del alumno pasado por parámetro
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  liNode.classLastName = 'list-group-item'

  liNode.classEmail = 'list-group-item'

  var fullName = ''

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ', ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

/**
 * searchStudentIndexByDni permite buscar la posición de un estudiante en el array,
 * comparando el dni por valor exacto
 * @param {string} dni nombre del estudiante
 * @param {Array} studentsList Array de estudiantes
 * @returns {number} posición del estudiante en el Array, si no lo encuentra -1
 */

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}
