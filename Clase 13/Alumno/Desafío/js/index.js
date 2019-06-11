$(document).ready(function () {
  console.log('Desafio 13')


   var submitButtonNode = $('#submitButton')
   var inputEmailNode = $('#email')
   var firstNameInputNode = $('#firstName')
   var commentsInputNode = $('#comments')


  firstNameInputNode.one('blur', validateEmtpyField)
  inputEmailNode.one('blur', validateEmailField)
  commentsInputNode.one('blur', validateEmtpyField)

  function validateEmtpyField (event) {
    var inputNode = $(this)

    var errorText = ''
    inputNode.next().remove()

    if (!inputNode.val()) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmtpyField)
    }

    validateButton()
  }
  
  
  function validateEmailField (event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  
  

  function validateButton () {
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})