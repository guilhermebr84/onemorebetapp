import React from "react";

function HomePage() {

    const imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvew6ApO5lpUFOjOPoORmMNULL7a-qc-_8Tg&usqp=CAU";

  return (
    <div>
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}
 
export default HomePage;
