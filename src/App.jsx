// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Table from './Table';

function App() {
  const [headerSum, setHeaderSum] = useState(0);
  const [columnSums, setColumnSums] = useState([0, 0, 0, 0]);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data (adjust the path to your actual json file)
    fetch('./src/assets/data.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(err => console.error('Error loading JSON data:', err));
  }, []);

  const totalColumnSums = columnSums.map(columnSum => parseFloat(headerSum) + parseFloat(columnSum));

  return (
    <div id='AppContainer'>
      
      <div id='AppHeader'>
        <Header onSumChange={setHeaderSum} />
      </div>

      {/* these two fuckers*/}

      <div id='AppTable'>
        <Table headerSum={headerSum} onColumnSumsChange={setColumnSums} jsonData={jsonData} />
      </div>
      
      <div id='AppOutput'>
        {totalColumnSums.map((total, index) => (
          <p key={index}>Column {index + 1}: {total}</p>
        ))}
      </div>
      
    </div>
  );
}

export default App;
