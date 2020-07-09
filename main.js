var logoHeight = document.querySelector('.n3-logo').offsetHeight;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.homepage-navbar').style.top = "0";
  } else {
    document.querySelector('.homepage-navbar').style.top = "-8vw";
  }
  prevScrollpos = currentScrollPos;
}
const toggleSchedule = () => {
    document.querySelector('.schedule-sidebar').classList.toggle("schedule-active")
    document.querySelector('.schedule-clickout').classList.toggle('clickout-active');
}
document.querySelector('.schedule-link').onclick = function(){
    toggleSchedule();
}

document.querySelector('.schedule-clickout').onclick =  function(){
    toggleSchedule();
}
document.querySelector('#schedule-box').onclick =  function(){
    toggleSchedule();
}

