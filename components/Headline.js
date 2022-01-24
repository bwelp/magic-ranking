import React from "react";

import "./Headline.css";

function Headline(props) {
  const addHeadline = () => {
    switch (props.items) {
      case "start":
        return "Bestenliste";
      case "addPlayer":
        return "Spieler:";
      case "addDeck":
        return "Decks:";
      case "addResult":
        return "Ergebnisse:";
      default:
        return "Fehler! Das hätte nicht passieren sollen!";
    }
  };

  return <h1>{addHeadline()}</h1>;
}

export default Headline;
