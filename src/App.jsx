import React, { useEffect, useState } from "react";
import "./App.css";
import BlockCommande from "./commande";

function App() {
  const messageCommande = React.createRef();

  const [stateActiveBlock, setStateActiveBlock] = useState(true);

  const block = ["Fill"];

  const activeCommande = () => {
    setStateActiveBlock((prevState) => !prevState);
    console.log(messageCommande.current);
  };

  useEffect(() => {
    document.title = "Crème glacé";
  });
  return (
    <>
      <div className="area" style={{ maxWidth: "450px", height: "400px" }}>
        <div
          className=""
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 className="h3">Crème glacé</h3>
          <button className="buttonAddCommande" onClick={activeCommande}>
            +
          </button>
        </div>
        <div
          className="backgroundCoffee"
          style={{ Width: "450px", height: "80%" }}
        >
          <div
            ref={messageCommande}
            className="alertNoCommande"
            style={{ display: `${stateActiveBlock ? "block" : "none"}` }}
          >
            Aucune commande
          </div>
          <div>{stateActiveBlock ?'' : <BlockCommande />}</div>
        </div>
      </div>
    </>
  );
}

export default App;
