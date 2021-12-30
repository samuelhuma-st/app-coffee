import "./commande.css";
import { useState } from "react";

const iceInitCreams = [
  {
    name: "caramel",
    value: 0,
  },
  {
    name: "chocolat",
    value: 0,
  },
  {
    name: "vanille",
    value: 0,
  },
];

function BlockCommande() {
  const [iceCreams, setIceCreamsValue] = useState(iceInitCreams);

  const increment = (name, value) => {
    const updatedIceCreams = [...iceCreams];
    updatedIceCreams.find((item) => item.name === name).value = value + 1;

    setIceCreamsValue([...updatedIceCreams]);
  };

  const decrement = (name, value) => {
    if (value > 0) {
      const updatedIceCreams = [...iceCreams];
      updatedIceCreams.find((item) => item.name === name).value = value - 1;

      setIceCreamsValue([...updatedIceCreams]);
    }
  };

  return (
    <div className="menu">
      {/* <h1>Crèmes glacés</h1> */}
      <div>
        {iceCreams.map((iceCream) => (
          <div key={iceCream.name} className="parfum">
            <p className="choice">{iceCream.name}</p>
            <div className="function">
              <button onClick={() => increment(iceCream.name, iceCream.value)}>
                +
              </button>
              <button onClick={() => decrement(iceCream.name, iceCream.value)}>
                -
              </button>
              <p className="counter">{iceCream.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        {iceCreams.map((iceCream) => (
          <span style={{display:"flex", alignItems:"center" }} key={iceCream.name}>
            <p className="counter2">{iceCream.value}</p>
            <p className="choice2">{iceCream.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlockCommande