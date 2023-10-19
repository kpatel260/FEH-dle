import "./index.css";
import Answers from "./components/Answers";
import { useState } from "react";

function App() {
  const renderGame = () => {
    const possAns = ["Claude", "Dimitri", "Edelgard", "Hilda"];
    let randAns = possAns[Math.floor(Math.random() * possAns.length)];
    return <Answers correctAns={randAns} />;
  };

  return (
    <>
      <div className="site-body">
        <div className="info-box">
          <div className="feh-button" onClick={() => window.location.reload()}>
            <div className="feh-button-text">RESET GAME</div>
          </div>
        </div>
        {renderGame()}
      </div>
    </>
  );
}

export default App;
