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
    list[2].classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

list.forEach((item) =>
item.addEventListener('mouseleave', resetActive));

/*Onclick na trilha de missões*/
function showDialog(text) {
    document.getElementById("dialog-text").textContent = text;
    document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}