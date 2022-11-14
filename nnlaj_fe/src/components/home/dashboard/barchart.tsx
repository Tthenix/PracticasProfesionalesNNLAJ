import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Humedad por semana',
      },
    },
  
  };
  
  const labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Humedad minima',
        data: labels.map(() => faker.datatype.number({ min: 50, max: 60 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humedad maxima',
        data: labels.map(() => faker.datatype.number({ min: 60, max: 90 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  
