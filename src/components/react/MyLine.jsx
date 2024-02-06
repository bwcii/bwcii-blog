import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';

export const MyLine = (data) => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    ChartJS.register(
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip
    );
    setIsRegistered(true);
  }, []);

  if (!isRegistered) return <></>;

  return (
    <Line
      data={{
        labels: [
          '1-1-2024',
          '1-2-2024',
          '1-3-2024',
          '1-4-2024',
          '1-5-2024',
          '1-6-2024',
          '1-7-2024',
          '1-8-2024',
          '1-9-2024',
          '1-10-2024',
          '1-11-2024',
          '1-12-2024',
          '1-13-2024',
          '1-14-2024',
          '1-15-2024',
          '1-16-2024',
          '1-17-2024',
          '1-18-2024',
          '1-19-2024',
          '1-20-2024',
          '1-21-2024',
          '1-22-2024',
          '1-23-2024',
          '1-24-2024',
          '1-25-2024',
          '1-26-2024',
          '1-27-2024',
          '1-28-2024',
          '1-29-2024',
          '1-30-2024',
          '1-31-2024',
          '2-1-2024',
          '2-2-2024',
          '2-3-2024',
          '2-4-2024',
          '2-5-2024',
          '2-6-2024',
        ],
        datasets: [
          {
            data: [
              1.86,
              2.70,
              7.81,
              11.79,
              15.24,
              18.24,
              20.97,
              24.50,
              25.24,
              25.56,
              31.00,
              33.86,
              33.86,
              37.50,
              39.93,
              43.57,
              46.48,
              48.93,
              52.06,
              52.88,
              57.38,
              60.72,
              63.79,
              67.47,
              69.26,
              69.58,
              70.73,
              71.20,
              74.77,
              78.28,
              81.02,
              81.46,
              83.27,
              85.37,
              86.11,
              88.08,
            ],
            label: 'Actual Study Time',
            borderColor: '#3e95cd',
            fill: false,
          },
        ],
      }}
      options={{ 
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: 'Total Study Time - 2024',
          },
        },
       }}
      width={500}
      height={250}
    />
  );
};
