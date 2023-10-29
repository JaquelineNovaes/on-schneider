/*Efeito hover na nav-bar*/
const list = document.querySelectorAll('.item-menu');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

function resetActive() {
    list.forEach((item)=>
    item.classList.remove('active'));
    list[4].classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

list.forEach((item) =>
item.addEventListener('mouseleave', resetActive));