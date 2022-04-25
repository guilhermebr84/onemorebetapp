import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";

function ReadAPI() {
  const [endPoint, setEndPoint] = useState("");

  const [container, setContainer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      "X-RapidAPI-Key": "f408906fcbmshe344a2371800b90p13f6b7jsna0183ec43fb4",
    },
  };

  fetch(
    "https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((data) => setContainer(data))
    .catch((err) => console.error(err));

  const onChangeHandler = (event) => {
    setEndPoint(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
}

export default ReadAPI;
