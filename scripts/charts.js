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
    list[3].classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

list.forEach((item) =>
item.addEventListener('mouseleave', resetActive));


const ctx1 = document.getElementById("myChart").getContext("2d");

const DATA_COUNT_1 = 12;
const NUMBER_CFG_1 = { count: DATA_COUNT_1, min: -100, max: 100 };

const labels1 = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const data1 = {
  labels: labels1,
  datasets: [
    {
      label: "Meta de consumo",
      data: [2000, 1800, 1750, 1800, 1850, 1900, 2000, 2000],
      backgroundColor: "grey",
    },
    {
      label: "Consumo de água",
      data: [2342, 1850, 1700, 1750, 1715, 1756, 1800, 1845],
      backgroundColor: "green",
    },
  ],
};

const config1 = {
  type: "bar",
  data: data1,
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart1 = new Chart(ctx1, config1);
 