import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { useEffect, useState } from 'react';

  export const MyDoughnut = (data) => {
    const [isRegistered, setIsRegistered] = useState(false);
  
    useEffect(() => {
      ChartJS.register(
        ArcElement,
        Tooltip,
        Legend,
      );
      setIsRegistered(true);
    }, []);

    if (!isRegistered) return <></>;
    return <Doughnut data={{
        labels: [
            'Angular',
            'Rust',
            'CS Fundamentals',
            'SRE',
            'Developer Blog',
            'DevOps',
            'node.js',
            'React',
            'C++',
            'C#',
            'Golang',
            'General SWE',
            'Python',
            'Astro',
            'Kubernetes',
            'Figma',
            'Material Design',
            'RxJS',
            'Typescript',
            'Fire-Notes (Project)',
            'Graphic Design',
            'Material UI',
        ],
        datasets: [
          {
            data: [
                31.00, 
                29.19, 
                16.81, 
                15.81,
                15.21,
                13.67,
                8.84,
                4.74,
                4.52,
                3.83,
                2.25,
                1.73,
                0.93,
                0.62,
                0.52,
                0.45,
                0.41,
                0.29,
                0.28,
                0.24,
                0.16,
                0.11,
            ],
            backgroundColor: [
              'rgb(239, 83, 80)', //Angular
              'rgb(236, 64, 122)', //Rust
              'rgb(171, 71, 188)', //CS Fundamentals
              'rgb(126, 87, 194)',//SRE
              'rgb(92, 107, 192)',//Developer Blog
              'rgb(66, 165, 245)',//DevOps
              'rgb(41, 182, 246)',//node.js
              'rgb(38, 198, 218)',//React
              'rgb(38, 166, 154)',//C++
              'rgb(102, 187, 106 )',//C#
              'rgb(156, 204, 101)',//Golang
              'rgb(212, 225, 87)',//General SWE
              'rgb(255, 238, 88)',//Python
              'rgb(255, 202, 40)',//Astro
              'rgb(255, 167, 38)',//Kubernetes
              'rgb(255, 112, 67)',//Figma
              'rgb(141, 110, 99)',//Material Design
              'rgb(189, 189, 189)',//RxJS
              'rgb(120, 144, 156)',//Typescript
              'rgb(229, 115, 115)',//Fire-Notes (Project)
              'rgb(240, 98, 146)',//Graphic Design
              'rgb(186, 104, 200)',//Material UI
            ],
          }
        ],
    }} 
    options={{ 
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: 'Hours Studied By Category - 2024',
          },
        },
       }}
      width={500}
      height={500}
    />;
  };