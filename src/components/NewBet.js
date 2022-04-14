import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Gambler from "./NewGambler";

function NewBet() {
  const [state, setState] = useState({
    apostador: "",
    data: "",
    valor: 0,
    resultado: "",
    placar: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="bg-light">
        <h1>Cadastrar Nova Aposta</h1>
        <span id="topo"></span>
        <div className="input-group mb-3">
          <span className="input-group-text">Nome Apostador</span>
          <input type="text" className="form-control"></input>
        </div>

        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Escolher Liga
          </button>
          <ul className="dropdown-menu">
            <li>Brasil Série A</li>
            <li>Premier LeagueA</li>
            <li>Calcio A</li>
            <li>La Liga</li>
          </ul>
          <input type="text" className="form-control"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Escolher a partida da rodada</span>
          <input type="text" className="form-control"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Inserir o Resultado Esperado</span>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              Vitória Mandante
            </button>
            <button type="button" className="btn btn-secondary">
              Empate
            </button>
            <button type="button" className="btn btn-danger">
              Vitória Visitante
            </button>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Data da Aposta</span>
          <input type="text" className="form-control"></input>
        </div>
        <div>
        <button type="button" className="ml-5 btn btn-primary">Enviar</button>
        <button type="button" className="mr-5 btn btn-warning">Reiniciar Formulário</button>
        </div>
      </div>
    </div>
  );
}
export default NewBet;
