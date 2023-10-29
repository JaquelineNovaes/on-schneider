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
    list[5].classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

list.forEach((item) =>
item.addEventListener('mouseleave', resetActive));

/*Carrossel atividades*/
const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        carousel.scrollLeft += icon.id == "Left" ? -firstImgWidth : firstImgWidth;
        console.log(icon);
    })
})
