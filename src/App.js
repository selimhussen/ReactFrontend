import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/').then((response) => {
      setMessage(response.data)
    }).catch((error) => {
      console.log(error);
    })

  });
  return (
    <div className="App">
      <h1>{message ? message : 'No Data'}</h1>
    </div>
  );
}

export default App;
