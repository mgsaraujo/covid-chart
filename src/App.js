import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';


function App() {
  const [dailyData, setData] = useState([]);

  const API = 'https://cvt-2020.azurewebsites.net/report'
  useEffect(() => {

    fetch(API).then((response) => {
      response.json().then(function (json) {
        setData(json);
      });
    }).catch((error) => console.error(error));

  });

  return (
    <div className="App">
      <Line
        data={{
          labels: dailyData.map(item => { return item.date; }),
          datasets: [{
            data: dailyData.map(item => { return item.confirmed; }),
            label: 'Confirmados',
            borderColor: '#3333ff',
            fill: true
          }]
        }}
      />
    </div>
  );
}

export default App;
