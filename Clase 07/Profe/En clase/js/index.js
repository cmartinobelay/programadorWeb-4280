// # 7 SesionStorage y LocalStorage [Modulo B]

// - 7.1	¿Qué es el sesionStorage y el localStorage?
//    - `setItem(key, value)`
//    - `getItem(key)`
//    - `removeItem(key)`
// - 7.2	¿Qué es un JSON?
// - 7.3	`JSON.stringify()` y `JSON.parse()`

console.log('Json vs Freddy')

var kitty = {
  name: 'Princess Caroline',
  age: 1.5,
  colors: [ 'white', 'grey', 'coffee' ],
  male: false,
  owner: {
    firstName: 'Camila',
    lastName: 'Rubin'
  }
}

// console.log(kitty.owner.firstName)

console.log(kitty.name)

var stingyKitty = JSON.stringify(kitty)

// console.log(stingyKitty)

console.log(stingyKitty)

var parsedKitty = JSON.parse(stingyKitty)

console.log(parsedKitty)
