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
    list[1].classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

list.forEach((item) =>
item.addEventListener('mouseleave', resetActive));

/*Carrossel*/
document.addEventListener("DOMContentLoaded", function () {
    const btnEventos = document.querySelector("#btn-eventos");
    const btnDesafios = document.querySelector("#btn-desafios");
    const btnDesafios1 = document.querySelector("#btn-desafios1");
    const btnEventos1 = document.querySelector("#btn-eventos1");
    const eventosContainer = document.querySelector("#eventos .row");
    const desafiosContainer = document.querySelector("#desafios .row");
    const cardWidth = 200; // Largura de um cartão (ajuste conforme necessário)
    let currentPositionEventos = 0;
    let currentPositionDesafios = 0;
  
    btnEventos.addEventListener("click", function () {
      currentPositionEventos += cardWidth * 3; // Avançar 3 cartões
      if (currentPositionEventos > 0) {
        currentPositionEventos = 0;
      }
      eventosContainer.style.transform = `translateX(${currentPositionEventos}px)`;
    });
  
    btnDesafios.addEventListener("click", function () {
      currentPositionDesafios += cardWidth * 3; // Avançar 3 cartões
      if (currentPositionDesafios > 0) {
        currentPositionDesafios = 0;
      }
      desafiosContainer.style.transform = `translateX(${currentPositionDesafios}px)`;
    });
  
    btnEventos1.addEventListener("click", function () {
      currentPositionEventos -= cardWidth * 3; // Retroceder 3 cartões
      eventosContainer.style.transform = `translateX(${currentPositionEventos}px)`;
    });
  
    btnDesafios1.addEventListener("click", function () {
      currentPositionDesafios -= cardWidth * 3; // Retroceder 3 cartões
      desafiosContainer.style.transform = `translateX(${currentPositionDesafios}px)`;
    });
  });
  