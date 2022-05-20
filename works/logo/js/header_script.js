var oldScrollY = 0;
var div = document.querySelector('.header');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY < 0 ){
    div.classList.add('header-top-fixed');
  } else {
    div.classList.remove('header-top-fixed');
  }
  
  oldScrollY = scrolled;
});