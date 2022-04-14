import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ReadBet() {
  const [state, setState] = useState({
    apostador:"",
    data: "",
		valor: 0,
		resultado: "",
		placar: ""
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

        const {data, valor, resultado, placar, id} = currentBetObj

        return <div key={id} className="row border-end mx-3">
          <h3>{data}</h3>
            <p>{valor}</p>
            <p>{resultado}</p>
            <p>{placar}</p>
        </div>
      })}
      </div>
      </div>
    );
  }
   
  export default ReadBet;