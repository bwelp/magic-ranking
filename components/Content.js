import React, { useState } from "react";

import "./Content.css";
import Players from "./content/Players";
import Decks from "./content/Decks";
import FormAddResult from "./forms/NewResult/FormAddResult";
import Blank from "./tables/Blank";

function Content(props) {
  const [playersArray, setPlayersArray] = useState(() => {
    let savedPlayers = localStorage.getItem("players");
    if (savedPlayers !== null && savedPlayers !== []) {
      let restoredPlayers = [];
      JSON.parse(savedPlayers).forEach((p) => {
        restoredPlayers.push(p.player);
      });
      return restoredPlayers;
    } 
    else {
      return [];
    }
  });
  
  const relayPlayersHandler = (players) => {
    console.log(players);
    let playerArr = [];
    if (players.length > 0) {
      players.forEach(p => {
        playerArr.push(p.player);
      })
    }
    setPlayersArray(playerArr);
  };

  console.log(playersArray);

  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return <Players onRelayPlayers={relayPlayersHandler}/>;
      case "addDeck":
        return <Decks items={playersArray}/>;
      case "addResult":
        return <FormAddResult />;
      default:
        return <Blank />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
