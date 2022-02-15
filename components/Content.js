import React, { useEffect } from "react";

import "./Content.css";
import UseSaveAndRestore from "../hooks/use-save-restore";
import Players from "./content/Players";
import Decks from "./content/Decks";
import Results from "./content/Results";
import Ranking from "./content/Ranking";

function Content(props) {

  const {
    items: players,
    addItemHandler: addPlayerHandler,
    removeItemHandler: removePlayerHandler,
  } = UseSaveAndRestore("players", "player");

  const {
    items: decks,
    addItemHandler: addDeckHandler,
    removeItemHandler: removeDeckHandler,
  } = UseSaveAndRestore("decks", "deckname");

  const {
    items: results,
    addItemHandler: addResultHandler,
    removeItemHandler: removeResultHandler,
  } = UseSaveAndRestore("results", "gameId");

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks));
  }, [decks]);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);


  const chooseContent = () => {
    switch (props.items) {
      case "addPlayer":
        return <Players players={players} decks={decks} results={results} onAddPlayer={addPlayerHandler} onRemovePlayer={removePlayerHandler}/>;
      case "addDeck":
        return <Decks players={players} decks={decks} results={results} onAddDeck={addDeckHandler} onRemoveDeck={removeDeckHandler} />;
      case "addResult":
        return <Results results={results} decks={decks} players={players} onAddResult={addResultHandler} onRemoveResult={removeResultHandler} />;
      default:
        return <Ranking results={results} players={players} />;
    }
  };

  return <div>{chooseContent()}</div>;
}

export default Content;
