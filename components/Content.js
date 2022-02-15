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
  error: playerError,
  isLoading: playerIsLoading,
  restoreItems: restorePlayers,
  addItemHandler: addPlayerHandler,
  removeItemHandler: removePlayerHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/players.json", "player");

const {
  items: decks,
  error: deckError,
  isLoading: deckIsLoading,
  restoreItems: restoreDecks,
  addItemHandler: addDeckHandler,
  removeItemHandler: removeDeckHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/decks.json", "deckname");

const {
  items: results,
  error: resultError,
  isLoading: resultIsLoading,
  restoreItems: restoreResults,
  addItemHandler: addResultHandler,
  removeItemHandler: removeResultHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/results.json", "gameId");

  console.log(playerError);
  console.log(deckError);
  console.log(resultError);

  console.log(playerIsLoading);
  console.log(deckIsLoading);
  console.log(resultIsLoading);

  useEffect(() => {
    restorePlayers("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/players.json", "players");
  }, [restorePlayers]);

  useEffect(() => {
    restoreDecks("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/decks.json", "decks");
  }, [restoreDecks]);

  useEffect(() => {
    restoreResults("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/results.json", "results");
  }, [restoreResults]);

  console.log(players);
  console.log(decks);
  console.log(results);

  // const {
  //   items: players,
  //   addItemHandler: addPlayerHandler,
  //   removeItemHandler: removePlayerHandler,
  // } = UseSaveAndRestore("players", "player");

  // const {
  //   items: decks,
  //   addItemHandler: addDeckHandler,
  //   removeItemHandler: removeDeckHandler,
  // } = UseSaveAndRestore("decks", "deckname");

  // const {
  //   items: results,
  //   addItemHandler: addResultHandler,
  //   removeItemHandler: removeResultHandler,
  // } = UseSaveAndRestore("results", "gameId");

  // useEffect(() => {
  //   localStorage.setItem("players", JSON.stringify(players));
  // }, [players]);

  // useEffect(() => {
  //   localStorage.setItem("decks", JSON.stringify(decks));
  // }, [decks]);

  // useEffect(() => {
  //   localStorage.setItem("results", JSON.stringify(results));
  // }, [results]);


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
