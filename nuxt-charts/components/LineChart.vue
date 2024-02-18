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
    ],
    datasets: [
      {
        label: 'Current',
        data: [53, 50, 65, 67, 63, 70, 68, 65, 71, 66, 59, 61, 64],
        backgroundColor: ['red', 'blue', 'green'],
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
});

const chart = ref();
</script>
<style>
.titleLine{
    margin-top: 5rem; 
}
.lineGraph{
    margin-top: 5rem; 
    background-color: lightgrey;
    width: 50%; 
}
</style>
