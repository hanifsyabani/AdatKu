const hamburger_icon = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const nav_ekstra = document.querySelector('.nav-ekstra')

hamburger_icon.onclick = (e) => {
  menu.classList.toggle('active');
  nav_ekstra.classList.toggle('active')
  e.preventDefault();
}

