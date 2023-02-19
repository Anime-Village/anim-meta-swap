import { useContext } from "react";
import SearchContext from "../../contexts/SearchToken";

import Swap from "../../components/swap";
import Pool from "../../components/pool";
import TopBar from "../../components/top-bar";

import ParticleVideo from "../../assets/images/flame-particle.mp4";

import "./trade.css";

const Trade = () => {
  const { state } = useContext(SearchContext);
  const { app } = state;

  return (
    <div>
      <TopBar />
      <div className="trade-container justify-center redline">
        {app === 1 ? <Swap /> : app === 2 ? <Pool /> : <></>}
      </div>
      <video
        className="background-robot-video"
        autoPlay
        muted
        loop
        src={ParticleVideo}
      />
    </div>
  );
};

export default Trade;
