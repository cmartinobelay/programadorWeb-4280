console.log('Hola')

var emailImput = $('#email')

 emailImput.blur(validateEmailField)

 function validateEmailField (event){
   var inputeNode = $(this)
   var value = inputeNode.val()

   if (!value || value.indexof('@') === -1 || value.indexof('.') === -1){
     inputeNode.removeClass('is-valid')
     inputeNode.addClass('is- invalid')
   } else {
     inputeNode.removeClass('is-invalid')
     inputeNode.addClass('is-valid')
   }

 }

