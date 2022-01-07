import React from "react";

import "./Headline.css";

function Headline(props) {
  const addHeadline = () => {
    switch (props.items) {
      case "start":
        return "Bestenliste";
      case "addPlayer":
        return "Füge einen Spieler hinzu:";
      case "addDeck":
        return "Füge ein Deck hinzu:";
      case "addResult":
        return "Füge ein Ergebnis hinzu:";
      default:
        return "Fehler! Das hätte nicht passieren sollen!";
    }
  };

  console.log(props.items);

  return <h1>{addHeadline()}</h1>;
}

export default Headline;
