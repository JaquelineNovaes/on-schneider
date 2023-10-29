const ctx3 = document.getElementById("myChart2").getContext("2d");

const DATA_COUNT_3 = 12;
const NUMBER_CFG_3 = { count: DATA_COUNT_3, min: -100, max: 100 };

const labels3 = [
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

const data3 = {
  labels: labels3,
  datasets: [
    {
      label: "Meta de consumo",
      data: [60, 70, 60, 50, 40, 30, 60, 50],
      backgroundColor: "grey",
    },
    {
      label: "Energia consumida",
      data: [50, 40, 50, 50, 60, 50, 55, 74],
      backgroundColor: "green",
    },
  ],
};

const config3 = {
  type: "bar",
  data: data3,
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

const myChart3 = new Chart(ctx3, config3);
