import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBet() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const vaiFazerIssoMesmo = window.confirm(
      "Você tem certeza que vai remover essa aposta?"
    );
    if (vaiFazerIssoMesmo) {
      axios
        .delete(`https://ironrest.herokuapp.com/onemorebetapp/${id}`)
        .then((response) => {
          navigate("/");
          //volta para pagina inicial
        })
        .catch((err) => console.error(err));
    } else {
      navigate(-1);
      //volta para pagina anterior
    }
  }, [id, navigate]);

  return <p>Sua Aposta está sendo deletada...</p>;
}

export default DeleteBet;
