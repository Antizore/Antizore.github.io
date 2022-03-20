import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./styles.css";

const data = [
  { option: "Juvissa" },
  { option: "Franco" },
  { option: "Leandro" },
  { option: "Belén" },
  { option: "Julian" },
  { option: "Santiago" },
  { option: "Jorge" },
  { option: "Carolina" },
  { option: "Sonia" },
  { option: "Julieta" },
  { option: "Diego J" },
  { option: "Luis" },
  { option: "Diego D" },
  { option: "Lorenzo" },
  { option: "Alexis" },
  { option: "Daniel" },
  { option: "Samira" },
  { option: "Rodrigo" }
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="ruleta">
      <div>
        <img
          src="https://www.digitalhouse.com/logo-DH.png"
          alt="DH logo"
          width="120"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5451635ae4b07496a3f0aba1/1601475200173-N37WG5M55EEUVDA48FK9/logo-acamica-cenlanube+%281%29.png"
          alt="acamica logo"
          width="120"
        />
      </div>
      <Wheel
        backgroundColors={["#5500FF", "#ffffff"]}
        textColors={["#ffffff", "#5500FF"]}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>Buscar Elegid@</button>
    </div>
  );
};
