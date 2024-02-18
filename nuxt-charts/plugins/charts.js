import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    RadialLinearScale,
  } from 'chart.js'
  
  export default defineNuxtPlugin(() => {
    Chart.register(
      CategoryScale,
      LinearScale,
      BarElement,
      PointElement,
      LineElement,
      ArcElement,
      Title,
      Tooltip,
      Legend,
      RadialLinearScale
    )
  })