import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-datalabels';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Schoolacademics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Problem Solving', 'Critical Thinking', 'Creativity', 'Communication','sports'],
  datasets: [
    {
      label: 'Skill points',
      data: [85, 75, 45, 40, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(104, 255, 99, 0.8)',
      ],
      borderColor: [
        'rgb(172, 0, 37)',
        'rgb(0, 109, 182)',
        'rgb(196, 140, 0)',
        'rgb(0, 128, 128)',
        'rgb(0, 128, 0)',
        
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      color: '#fff',
      font: {
        weight: 'bold',
        size: 14,
      },
      formatter: (value, context) => {
        return context.chart.data.labels[context.dataIndex];
      },
    },
    legend: {
      position: 'bottom',
    },
  },
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart',
  },
};

function Academics() {
  return (
    <section className="sitacademics container mt-5" id="academics">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mb-4">Academic status</h2>
          <h3 className="mb-3">12th Standard</h3>
          <p className="lead">Kendriya Vidyalaya </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <Pie data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;