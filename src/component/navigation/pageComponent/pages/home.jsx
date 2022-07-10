import React from "react";
import Banner from "../banner/banner";
import Cards from "../cards/cards";
import Header from "../header/header";
import InputList from "../inputList/inputList";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <InputList />
      <Cards />
    </div>
  );
}

export default Home;
