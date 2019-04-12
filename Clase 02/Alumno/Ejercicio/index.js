var dia = prompt('Ingun día de la semana')

switch (dia) {
  case 'Lunes':
  case 'lunes':
  case 'Martes':
  case 'martes':
  case 'Miercoles':
  case 'miercoles':
  case 'Miercoles':
  case 'Jueves':
  case 'jueves':
  case 'Viernes':
  case 'viernes':
    console.log('Es un dia habil')
    break

  case 'Sabado':
  case 'sabado':
  case 'Domingo':
  case 'domingo':
    console.log('Es fin de semana')
    break

  default:
    console.log('Ingresó un dia invalido')
    break
}
