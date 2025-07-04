import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,  Filler , LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler 
);

const PersistencyChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Persistency Rate',
                data: [96.5, 97.1, 97.8, 98.0, 98.2, 98.2],
                borderColor: '#D3202F',
                backgroundColor: 'rgba(211, 32, 47, 0.05)',
                borderWidth: 2,
                pointBackgroundColor: '#D3202F',
                pointRadius: 3,
                pointHoverRadius: 5,
                fill: true,
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 95,
                max: 100,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderDash: [3, 3]
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div >
            <Line data={data} options={options} />
        </div>
    );
};

export default PersistencyChart;
