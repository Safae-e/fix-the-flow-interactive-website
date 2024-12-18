let div = document.querySelector('.play')
let playbutton = document.querySelector('button')
playbutton.addEventListener('click', paused)

function paused() {
    div.classList.toggle('paused')
    console.log('doet het')
  }


const audio = document.getElementById('audio');
const content = document.querySelector('.content');
let scrollInterval;

