<template>
    <div class="titleRadar">
      This is the Radar Chart component
    </div>
    <div class="radarGraph">
        <Radar ref="chart" class="" :data="chartData" :options="options" />
    </div>
  </template>

<script setup>
import { Radar } from 'vue-chartjs';
const chartData = computed(() => {
  return {
    labels: [
    'Openness',
    'Conscientiousness',
    'Neuroticism',
    'Extraversion',
    'Agreeableness',
  ],
  datasets: [
    {
      label: '1st measure',
      backgroundColor: 'rgba(179,181,198,0.5)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56]

    },
    {
      label: '2nd measure',
      backgroundColor: 'rgba(255,99,132,0.5)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
      //pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96]
    }
  ]
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
});

const chart = ref();
</script>
<style>
.titleRadar{
    margin-top: 5rem; 
    text-align: center;
}
.radarGraph{
    margin-top: 5rem; 
    
    width: 50%; 
    margin: auto; 
}
</style>
