<template>
    <div class="titleLine">
      This is the Line Chart component
    </div>
    <div class="lineGraph">
        <Line ref="chart" class="" :data="chartData" :options="options" />
    </div>
  </template>

<script setup>
import { Line } from 'vue-chartjs';

const { data:bioData, refresh } = await useFetch ('/api/dataApi', {
  transform: (_bioData)=> _bioData.data
});

const heartrateValues= computed(()=>{
  return bioData.value.map(item=>item.heartrate);
});

console.log(heartrateValues.value);

const chartData = computed(() => {
  return {
    labels: [
      '0',
      '5',
      '10',
      '15',
      '20',
      '25',
      '30',
      '35',
      '40',
      '45',
      '50',
      '55',
      '60',
      '0',
      '5',
      '10',
      '15',
      '20',
      '25',
      '30',
      '35',
      '40',
      '45',
      '50',
      '55',
      '60',
    ],
    datasets: [
      {
        label: 'Current',
        data: heartrateValues.value,
        borderColor: 'red',
      },
      {
        label: 'Current',
        data: heartrateValues.value,
        borderColor: 'green',
      },
    ],
  };
});


const options = ref({
  responsive: true,
  
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
    
  }
);



const chart = ref();

onMounted(() => {
  setInterval(() => {
    chart.value.chart.data.datasets[0].data = heartrateValues.value;
    refresh()
    chart.value.chart.update();
  }, 3000);
       
});


onMounted(() => {
  setInterval(() => {
    chart.value.chart.data.datasets[1].data = heartrateValues.value;
    refresh()
    chart.value.chart.update();
  }, 3000);
       
});

</script>
<style>
.titleLine{
    margin-top: 5rem; 
    text-align: center;
}
.lineGraph{
    margin-top: 5rem; 
    background-color: lightgrey;
    width: 50%; 
    margin: auto; 
}
</style>
