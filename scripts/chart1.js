const ctx2 = document.getElementById("myChart1").getContext("2d");
const DATA_COUNT = 5;
const NUMBER_CFG = { count: Math.ceil(DATA_COUNT / 2), min: 0, max: 100 };

// Gerar números para metade dos dados para "Red" e metade para "Orange"
const redData = Utils.numbers(NUMBER_CFG);
const orangeData = Utils.numbers(NUMBER_CFG);

// Combinação dos dados para "Red" e "Orange"
const combinedData = redData.concat(orangeData);

const data = {
  labels: ['Red', 'Orange'],
  datasets: [
    {
      label: 'Dataset 1',
      data: combinedData,
      backgroundColor: Object.values(Utils.CHART_COLORS).slice(0, DATA_COUNT), // Pegar as cores necessárias
    },
  ],
};
const myChart1 = new Chart(ctx2, config2);