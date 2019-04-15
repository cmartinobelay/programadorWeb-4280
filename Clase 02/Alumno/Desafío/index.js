var gender = prompt('Ingrese su genero')
var age = prompt('Ingrese su edad')
var mensage = ''

switch (gender) {
  case 'mujer':
    console.log('Sra')
    break

  case 'hombre':
    console.log('Sr')
    break

  default:
    console.log('Sx')
    break
}

if (age >= 18) {
  console.log('usted es mayor de edad puede ingresar')
} else {
  console.log('usted es menor de edad no puede ingresar')
}
