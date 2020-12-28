/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'

const App = () => {
  function handleCallApi(){
    axios({
      url: 'http://localhost:3333/automatic', //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'relatório.pdf'); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }

  return (
    <div className="App">
      <button onClick={() => handleCallApi()} >Baixar relatório</button>
    </div>
  );
}

export default App;
