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
            _id,
          } = currentBetObj;

          return (
            <div key={_id} className="mt-5">
              <h3>{apostador}</h3>
              <p>{liga}</p>
              <p>{partida}</p>
              <p>{resultado}</p>
              <p>{placar}</p>
              <p>{data}</p>
              <p>{valor}</p>

              <div className="mb-3 text-start">
                <Link className="ms-2 btn btn-warning" to={`/update/${_id}`}>
                  Editar/Atualizar
                </Link>
                <Link className="ms-4 btn btn-danger" to={`/delete/${_id}`}>
                  Delete
                </Link>
              </div>

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
