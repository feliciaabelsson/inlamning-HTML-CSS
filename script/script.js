  // toggle menu
  document.querySelector('.menu-icon')
  .addEventListener('click', function(){
      // Runs when clicking on menu-icon
      document.querySelector('body')
      .classList.toggle('menu-open')
  });

  // closing menu when click on menu option 
  document.querySelectorAll('nav > a') //get all a:s inside nav
  .forEach(link => { //for each element in returned list 
      link.addEventListener('click', function(){
          //on click received, toggle open-class on body
          document.querySelector('body')
          .classList.toggle('menu-open')
      })
  });

  
    

