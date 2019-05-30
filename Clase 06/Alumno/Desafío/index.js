console.log('hola')

function includesText (text, baseTetx){
  
if (typeof text === 'string' && typeof baseTetx === 'string') {
var textUpperCase = text.toUpperCase()
var baseTetxToUpperCase = baseTetx.toUpperCase()

if (baseTetxToUpperCase.indexOf(textUpperCase) !== -1){
  return true
}else{
  return false
}
}else{
  return false
}
}

console.log(includesText('PA' , "Patricia"))