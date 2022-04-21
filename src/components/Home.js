import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


function Home() {

    

    const imgURL = "https://438079-1371756-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/sport-betting-banner-2.jpg";

  return (
    <div>
      <h1>Welcome to One More Bet App</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}
 
export default Home;
