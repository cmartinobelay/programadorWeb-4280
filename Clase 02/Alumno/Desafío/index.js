var gender = prompt('Ingrese su genero, male, female u other')
var age = prompt('Ingrese su edad')
var mensage = 'Hola, '

switch (gender) {
  case 'female':
    console.log('Sra')
    break

  case 'male':
    console.log('Sr')
    break

  case 'other':
    console.log('Sx')
    break
  default:
    message = mensage + 'Genero invalido'
  
}

if (age >= 18) {
  message = mensage + 'usted es mayor de edad puede ingresar'
} else { (age >= 18)
  message = message + 'usted es menor de edad no puede ingresar'
}

console.log(mensage)