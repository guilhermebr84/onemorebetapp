import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ReadBet() {
  const [state, setState] = useState([]);

  // const { id } = useParams; - tem que usar para puxar os detalhes

  useEffect(() => {
    async function AllBets() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/onemorebetapp"
        );
        setState([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    AllBets();
  }, []);

  console.log(state);

  return (
    <div>
      <h2>Consulte as apostas:</h2>

      <div className="col">
        {state.map((currentBetObj) => {
          const {
            apostador,
            liga,
            partida,
            resultado,
            placar,
            data,
            valor,
            id,
          } = currentBetObj;

          return (
            <div key={id} className="row border-end mx-3">
              <h3>{apostador}</h3>
              <p>{liga}</p>
              <p>{partida}</p>
              <p>{resultado}</p>
              <p>{placar}</p>
              <p>{data}</p>
              <p>{valor}</p>

              <Link key={id} className="btn btn-warning me-3" to={`/${id}`}>
                Editar/Atualizar
              </Link>
              <Link
                className="btn btn-danger me-3"
                to={`https://ironrest.herokuapp.com/onemorebetapp/delete/${id}`}
              >
                Delete
              </Link>

              {/* <Link></Link> */}
              {/* adicionar 2 botoes - rota editar e rota delete - pode ser <button></button> ou <Link /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReadBet;
