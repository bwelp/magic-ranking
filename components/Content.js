import React, { useState } from "react";

import "./Content.css";
import Players from "./content/Players";
import Decks from "./content/Decks";
import Results from "./content/Results";
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

  const [decknamesArray, setDecknamesArray] = useState(() => {
    let savedDecks = localStorage.getItem("decks");
    if (savedDecks !== null && savedDecks !== []) {
      let restoredDecknames = [];
      JSON.parse(savedDecks).forEach((d) => {
        restoredDecknames.push(d.deckname);
      });
      return restoredDecknames;
    } 
    else {
      return [];
    }
  });
  
  const relayDecknamesHandler = (decks) => {
    let decknamesArr = [];
    if (decks.length > 0) {
      decks.forEach(d => {
        decknamesArr.push(d.deckname);
      })
    }
    setDecknamesArray(decknamesArr);
  };

  console.log(playersArray);

  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return <Players onRelayPlayers={relayPlayersHandler}/>;
      case "addDeck":
        return <Decks items={playersArray} onRelayDecknames={relayDecknamesHandler}/>;
      case "addResult":
        return <Results items={decknamesArray} />;
      default:
        return <Blank />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
