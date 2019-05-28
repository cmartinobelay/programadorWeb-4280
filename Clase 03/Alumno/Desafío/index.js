console.log('hola')

var operation = prompt('Ingresá la operación, *, +, -, /')

var number1 = prompt('Ingrese el primer número')

var parsedNumber1 = parseFloat(number1, 10)

do {
  number2 = prompt('Ingerese el segundo número')
  parsedNumber2 = parseFloat(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

switch (operation) {
  case 'mul':
  case '*':
    console.log(
      'El resultado de la multiplicación es ' + parsedNumber1 * parsedNumber2
    )
    break
  case 'sum':
  case '+':
    console.log('El resultado de la suma es ' + (parsedNumber1 + parsedNumber2))
    break
  case 'res':
  case '-':
    console.log(
      'El resultado de la resta es ' + (parsedNumber1 - parsedNumber2)
    )
    break
  case 'div':
  case '/':
    while (parsedNumber2 === 0) {
      number2 = prompt(
        'El dividendo no puede ser cero, ingrese el segundo de número de nuevo'
      )
      parsedNumber2 = parseFloat(number2, 10)
    }
    console.log(
      'El resultado de la división es ' + parsedNumber1 / parsedNumber2
    )
    break
  default:
    console.log('Operación no valida')
    break
}


