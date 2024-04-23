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
          '2-7-2024',
          '2-8-2024',
          '2-9-2024',
          '2-10-2024',
          '2-11-2024',
          '2-12-2024',
          '2-13-2024',
          '2-14-2024',
          '2-15-2024',
          '2-16-2024',
          '2-17-2024',
          '2-18-2024',
          '2-19-2024',
          '2-20-2024',
          '2-21-2024',
          '2-22-2024',
          '2-23-2024',
          '2-24-2024',
          '2-25-2024',
          '2-26-2024',
          '2-27-2024',
          '2-28-2024',
          '2-29-2024',
          '3-1-2024',
          '3-2-2024',
          '3-3-2024',
          '3-4-2024',
          '3-5-2024',
          '3-6-2024',
          '3-7-2024',
          '3-8-2024',
          '3-9-2024',
          '3-10-2024',
          '3-11-2024',
          '3-12-2024',
          '3-13-2024',
          '3-14-2024',
          '3-15-2024',
          '3-16-2024',
          '3-17-2024',
          '3-18-2024',
          '3-19-2024',
          '3-20-2024',
          '3-21-2024',
          '3-22-2024',
          '3-23-2024',
          '3-24-2024',
          '3-25-2024',
          '3-26-2024',
          '3-27-2024',
          '3-28-2024',
          '3-29-2024',
          '3-30-2024',
          '3-31-2024',
          '4-1-2024',
          '4-2-2024',
          '4-3-2024',
          '4-4-2024',
          '4-5-2024',
          '4-6-2024',
          '4-7-2024',
          '4-8-2024',
          '4-9-2024',
          '4-10-2024',
          '4-11-2024',
          '4-12-2024',
          '4-13-2024',
          '4-14-2024',
          '4-15-2024',
          '4-16-2024',
          '4-17-2024',
          '4-18-2024',
          '4-19-2024',
          '4-20-2024',
          '4-21-2024',
          '4-22-2024',
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
              90.34,
              91.53,
              92.02,
              92.02,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22,
              92.22, //4-1-24
              93.51, //4-2-24
              94.24, //4-3-24
              94.24, //4-4-24
              94.24, //4-5-24
              94.24, //4-6-24
              94.24, //4-7-24
              94.24, //4-8-24
              95.25, //4-9-24
              95.83, //4-10-24
              97.66, //4-11-24
              97.66, //4-12-24
              98.94, //4-13-24
              99.91, //4-14-24
              100.38, //4-15-24
              101.71, //4-16-24
              103.41, //4-17-24
              106.47, //4-18-24
              106.92, //4-19-24
              107.33, //4-20-24
              110.41, //4-21-24
              114.56, //4-22-24
            ],
            label: 'Total Study Time',
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
