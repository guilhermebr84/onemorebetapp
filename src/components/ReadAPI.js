import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

function ReadAPI() {

  const [state, setState] = useState({
    team:""
  })

  const [endPoint, setEndPoint] = useState("");

  const [container, setContainer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      "X-RapidAPI-Key": "f408906fcbmshe344a2371800b90p13f6b7jsna0183ec43fb4",
    },
  };
  useEffect(() => {
    fetch(
      "https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        const auxTeamNames = getTeamNames(response.response)

        console.log(auxTeamNames)

        setContainer([...auxTeamNames])})
      .catch((err) => console.error(err));  
  },[])
  //array de dependencias vazias para renderizar uma vez
  
  const onChangeHandler = (event) => {
    setEndPoint(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  function getTeamNames(arr) {
      return arr.map((el) => {
        return el.team.name
      })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label> <p>Selecione um Time</p></label>

        <select id="team" value={state.team} name="team" onChange={onChangeHandler}>
        
        <option>
            Selecione abaixo...
          </option>
          {container.map((currentOption) => (
            <option key={currentOption} value={currentOption}>
              {currentOption}
            </option>))}
        </select>
        
      </form>
    </div>
  );
}

export default ReadAPI;
