import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateBet() {
  const [state, setState] = useState({
    apostador: "",
    liga: "",
    partida: "",
    resultado: "",
    placar: "",
    data: "",
    valor: 0,
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function updateBet() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/onemorebetapp/${id}`
        );
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    updateBet();
  }, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `https://ironrest.herokuapp.com/onemorebetapp/${id}`,
        state
      );
      console.log(response.data);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-light">
          <h2>Atualize suas apostas:</h2>

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
            <span className="input-group-text">Trocar Liga</span>
            <select
              className="form-select"
              name="liga"
              value={state.liga}
              onChange={handleChange}
            >
              <option selected>{state.liga}</option>
              <option value="1">Brasil Série A</option>
              <option value="2">Premier League</option>
              <option value="3">Calcio A</option>
              <option value="4">La Liga</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              Atualizar a partida da rodada
            </span>
            <select
              className="form-select"
              name="partida"
              value={state.partida}
              onChange={handleChange}
            >
              <option selected>{state.partida}</option>
              <option value="1">A x B</option>
              <option value="2">C x D</option>
              <option value="3">E x F</option>
              <option value="4">H x I</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Atualizar o Resultado</span>
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
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Vitória Mandante
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Empate
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Vitória Visitante
                </label>
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              Data da Aposta é Atualizada para HOJE
            </span>
            <input
              type="text"
              className="form-control"
              name="date"
              value={state.date}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Confirmar Valor em BRL</span>
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
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateBet;
