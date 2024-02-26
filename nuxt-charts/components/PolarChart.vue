<template>
    <div class="titleLine">
      This is the Polar Chart component
    </div>
    <div class="polarGraph">
        <PolarArea ref="chart" class="" :data="chartData" :options="options" />
    </div>
  </template>

<script setup>
import { PolarArea } from 'vue-chartjs';
const chartData = computed(() => {
  return {
    labels: [
    'Openness',
    'Conscientiousness',
    'Neuroticism',
    'Extraversion',
    'Agreeableness',
  ],
  datasets: [{
    label: 'Traits',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(230, 99, 170)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
  }],
  };
});

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
              color: 'black' // Cambia el color del texto de la leyenda
            }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    r: {
            grid: {
              color: 'rgba(150, 90, 250, 0.3)' // Cambia el color de la cuadrícula radial
            },
            ticks: {
              color: 'green' // Cambia el color de las marcas del eje radial
            }
          },
  },
});

const chart = ref();
</script>

<style>
.titleLine{
    margin-top: 5rem; 
}
.polarGraph{
    margin-top: 5rem; 
    background-color: lightgrey;
    width: 50%; 
    margin: auto; 
}
</style>
