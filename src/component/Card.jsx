import { useEffect, useState } from "react";

import smallDivider from "../assets/pattern-divider-mobile.svg";
import bigDivider from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";

export default function Card() {
  const [advice, setAdvice] = useState({
    id: "151",
    text: "When faced with a choice, do both.",
  });
  const [allAdvice, setAllAdvice] = useState({});

  const giveAdvice = () => {
    setAdvice({
      id: allAdvice.slip.id,
      text: allAdvice.slip.advice,
    });
  };

  useEffect(() => {
    console.log("effect ran");
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((slip) => setAllAdvice(slip));
    // .catch((error) => console.log(error));
  }, [advice]);

  // console.log(allAdvice);

  return (
    <div className="card">
      <h1 className="card__title">ADVICE #{advice.id}</h1>

      <p className="card__advice">&#8220; {advice.text} &#8221;</p>
      <picture>
        <source media="(min-width: 600px)" srcSet={bigDivider} />
        <img
          className="card__divider"
          src={smallDivider}
          media="(max-width: 375px)"
          srcSet={smallDivider}
          alt="design separator"
        />
      </picture>

      <button className="card__button" type="button" onClick={giveAdvice}>
        <img className="card__button__icon" src={diceIcon} alt="dice icon" />
      </button>
    </div>
  );
}
