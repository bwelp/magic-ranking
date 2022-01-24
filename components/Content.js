import React, { useState } from "react";

import "./Content.css";
import Players from "./content/Players";
import Decks from "./content/Decks";
import Results from "./content/Results";
import Ranking from "./content/Ranking";

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
    let playersArr = [];
    if (players.length > 0) {
      players.forEach(p => {
        playersArr.push(p.player);
      })
    }
    if(playersArr.length === playersArray.length) {
      for (let i = 0; i < playersArr.length; i++) {
        if(playersArr[i] !== playersArray[i]) {
          setPlayersArray(playersArr);
          break;
        }
      }
    }
    else {
      setPlayersArray(playersArr);
    }
  };

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
    if(decknamesArr.length === decknamesArray.length) {
      for (let i = 0; i < decknamesArr.length; i++) {
        if(decknamesArr[i] !== decknamesArray[i]) {
          setDecknamesArray(decknamesArr);
          break;
        }
      }
    }
    else {
      setDecknamesArray(decknamesArr);
    }
  };

  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return <Players onRelayPlayers={relayPlayersHandler}/>;
      case "addDeck":
        return <Decks items={playersArray} onRelayDecknames={relayDecknamesHandler}/>;
      case "addResult":
        return <Results decknames={decknamesArray} players={playersArray} />;
      default:
        return <Ranking />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
