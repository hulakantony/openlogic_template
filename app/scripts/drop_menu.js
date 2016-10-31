 var dropMenuItem = document.querySelectorAll('.dropable > a');
function openMenu(e){
  var target = e.target;
  e.preventDefault();
  var parent = target.closest('.dropable');

  var dropMenu = parent.nextElementSibling;
  dropMenu.classList.toggle('open');
  var image = target.nextElementSibling;
  image.classList.toggle('rotate');
}
for(var i = 0; i<dropMenuItem.length; i++){
  dropMenuItem[i].addEventListener('click', openMenu);
}