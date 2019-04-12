var number = prompt('Ingresá un numero')
if (number % 2) {
  console.log('El numero no es par')
} else {
  console.log('El numero es par')
}

//es asi porque lo que hace JS es hacer ese numero /2 y lo que evalua usando el % es el resto. Como el resto le da un numero distinto a cero para JS es un true. Otra de las formas es la que esta a continuacion, negando el !(number % 2) :

if (!(number % 2)) {
  console.log('El numero es par')
} else {
  console.log('El numero no es par')
}
