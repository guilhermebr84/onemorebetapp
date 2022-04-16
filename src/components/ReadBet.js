import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ReadBet() {
  const [state, setState] = useState({
    apostador: "",
    liga: "",
    partida: "",
    resultado: "",
    placar: "",
    data: "",
    valor: 0,
  })

  const { id } = useParams;
    
  useEffect(() => {
    async function AllBets() {
      try {
        const response = await axios.get('https://ironrest.herokuapp.com/onemorebetapp');
        setState({...response.data});

      } catch (err) {
        console.error(err)
      }} AllBets();}, []);
    
    return (
      <div>
        <h2>Consulte as apostas feitas por todos:</h2>

      <div className="col">
      {state.map(currentBetObj => {

        const {apostador, liga, partida, resultado, placar, data, id} = currentBetObj

        return <div key={id} className="row border-end mx-3">
          <h3>{state.apostador}</h3>
            <p>{state.liga}</p>
            <p>{state.partida}</p>
            <p>{state.resultado}</p>
            <p>{state.placar}</p>
            <p>{state.data}</p>
            <p>{state.valor}</p>
        </div>
      })}
      </div>
      </div>
    );
  }
   
  export default ReadBet;