import crossroads from 'crossroads'
import contactControllers from './controllers/contactControllers'

function router () {
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html', function(){
      console.log('Se cargo la home')
    })
  })
  
  crossroads.addRoute('/#/people', function () {
    $('#root').load('./partials/people.html', function(){
      console.log('People page')
    })
  })

  
  crossroads.addRoute('/#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', function(){
      console.log('LS page')
    })
  })
  
  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactControllers)
    
  })


  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router