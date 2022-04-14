//packs
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

//components
import Navbar from "./Navbar";
import Home from "./Home";
import NewBet from "./NewBet";
import ReadBet from "./ReadBet";
import ErrorPage from "./ErrorPage";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newbet" element={<NewBet />} />
          <Route path="/readbet" element={<ReadBet />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
