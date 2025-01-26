let div = document.querySelector('.play')
let playbutton = document.querySelector('button')
playbutton.addEventListener('click', paused)

function paused() {
    div.classList.toggle('paused')
    console.log('doet het')
  }


  let button = document.querySelector('button');
  let navigation = document.querySelector('nav');
  
  button.addEventListener("click", function(){
    navigation.classList.toggle('show-menu');
    console.log("doe het")
  })