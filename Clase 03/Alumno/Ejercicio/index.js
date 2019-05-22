var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
  console.log(day)

  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log('Es un dia habil')
      break

    case 'Sabado':
    case 'Sábado':
    case 'Domingo':
      console.log('Es fin de semana')
      break

    default:
      console.log('Es un dia invalido')
      break
  }
}
