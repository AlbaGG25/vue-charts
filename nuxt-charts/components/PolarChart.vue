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
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }],
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
.titleLine{
    margin-top: 5rem; 
}
.polarGraph{
    margin-top: 5rem; 
    background-color: lightgrey;
    width: 50%; 
}
</style>
