import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Nav from './Nav';
const data = {
    labels: ['Ubuntu', 'Debian', 'Linux Mint', 'ArchLinux', 'Fedora', 'RedHat'],
    datasets: [
      {
        label: 'Distribuciones de linux',
        data: [67, 45, 25, 12, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
class Canva extends React.Component {
    render() {
      return (
        <>
        <div className='header'>
          <Nav />
          <h1 className='title'>Porcentaje de uso distribuciones linux</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
            >
            </a>
          </div>
        </div>
        <Doughnut data={data} />
      </>
      )
    }
    }
    export default Canva;
    