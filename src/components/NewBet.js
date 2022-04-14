import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function NewBet() {
  const [state, setState] = useState({
    apostador:"",
    data: "",
		valor: 0,
		resultado: "",
		placar: ""
  })

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Nova Aposta</h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
export default NewBet;
