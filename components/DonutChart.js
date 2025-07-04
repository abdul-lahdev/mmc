'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Red',  'Pink'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 100],
        backgroundColor: ['#dc2c2b', '#fcf2f2'],
        hoverOffset: 4,
      },
    ],
  };

const options = {
  cutout: '70%',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          size: 10, 
        },
        color: '#6b7280',
      },
    },
  },
};


  return (
    <div className="mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
