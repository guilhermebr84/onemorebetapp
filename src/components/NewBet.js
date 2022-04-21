import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "./api";

function NewBet() {
  const [state, setState] = useState({
    apostador: "",
    liga: "",
    partida: "",
    resultado: "",
    placar: "",
    date: new Date(Date.now()).toLocaleString().split(' ')[0],
    valor: 0,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //api
    

    axios
      .post("https://ironrest.herokuapp.com/onemorebetapp", state)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-light">
          <h1>Cadastrar Nova Aposta</h1>

          <div className="input-group mb-3">
            <span className="input-group-text">Nome Apostador</span>
            <input
              type="text"
              className="form-control"
              name="apostador"
              value={state.apostador}
              onChange={handleChange}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Selecionar Liga</span>
            <select
              className="form-select"
              name="liga"
              value={state.liga}
              onChange={handleChange}
            >
              <option selected>Escolha Liga diponível...</option>
              <option value="Brasil Série A">Brasil Série A</option>
              <option value="Premier League">Premier League</option>
              <option value="Calcio A">Calcio A</option>
              <option value="La Liga">La Liga</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              Escolher a partida da rodada
            </span>
            <select
              className="form-select"
              name="partida"
              value={state.partida}
              onChange={handleChange}
            >
              <option selected>Escolha a partida... </option>
              <option value="A x B">A x B</option>
              <option value="C x D">C x D</option>
              <option value="E x F">E x F</option>
              <option value="H x I">H x I</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Escolher o Resultado</span>
            <div
              className="form-check"
              role="group"
              name="resultado"
              value={state.resultado}
              onChange={handleChange}
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resultado"
                  id="flexRadioDefault1"
                  value="Vitória Visitante"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Vitória Mandante
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resultado"
                  id="flexRadioDefault2"
                  value="Vitória Visitante"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Empate
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resultado"
                  id="flexRadioDefault3"
                  value="Vitória Visitante"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Vitória Visitante
                </label>
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Placar</span>
            <input
              type="number"
              className="form-control"
              name="placar"
              value={state.placar}
              onChange={handleChange}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Data da Aposta</span>
            <input
              type="text"
              className="form-control"
              name="date"
              value={state.date}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Valor em BRL</span>
            <input
              type="text"
              className="form-control"
              name="valor"
              value={state.valor}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button type="submit" className="ml-5 btn btn-primary">
              Enviar
            </button>
            {/* <button
              type="button"
              className="mr-5 btn btn-warning"
              onClick={handleRestartForm}
            >
              Reiniciar Formulário
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewBet;
