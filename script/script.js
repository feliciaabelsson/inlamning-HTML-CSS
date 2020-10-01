  // toggle menu
  document.querySelector('.menu-icon')
  .addEventListener('click', function(){
      // Körs vid ett klick
      document.querySelector('body')
      .classList.toggle('menu-open')
  });

  // close on click on link
  document.querySelectorAll('nav > a') //get all a:s inside nav
  .forEach(link => { //for each element in returned list 
      link.addEventListener('click', function(){
          //on click received, toggle open-class on body
          document.querySelector('body')
          .classList.toggle('menu-open')
      })
  })