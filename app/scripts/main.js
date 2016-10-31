var dropMenuItem = document.querySelectorAll('.dropable > a');
function openMenu(e){
	var target = e.target;
	e.preventDefault();
	var dropMenu = target.closest('.dropdown-first');
	dropMenu.classList.toggle('open';)
}
dropMenuItem.forEach(function(elem){
	elem.addEventListener('click', openMenu);
})