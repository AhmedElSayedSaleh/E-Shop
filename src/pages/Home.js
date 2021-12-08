import React from "react";
import { MainSlider, Newsletter } from "../components";
import ForYou from "../components/ForYou";

const Home = () => {
  return (
    <div className={"home"}>
      <div className="home__slider">
        <MainSlider />
      </div>
      <div className={"container"}>
        <div className="row">
          <ForYou />
        </div>
        <div className="row">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
