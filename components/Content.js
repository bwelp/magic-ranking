import React, { useEffect, Suspense } from "react";

import "./Content.css";
import UseSaveAndRestore from "../hooks/use-save-restore";
// import Players from "./content/Players";
// import Decks from "./content/Decks";
// import Results from "./content/Results";
import Ranking from "./content/Ranking";

const Players = React.lazy(() => import("./content/Players"));
const Decks = React.lazy(() => import("./content/Decks"));
const Results = React.lazy(() => import("./content/Results"));

function Content(props) {
const {
  items: players,
  restoreItems: restorePlayers,
  addItemHandler: addPlayerHandler,
  removeItemHandler: removePlayerHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/players.json", "player");

const {
  items: decks,
  restoreItems: restoreDecks,
  addItemHandler: addDeckHandler,
  removeItemHandler: removeDeckHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/decks.json", "deckname");

const {
  items: results,
  restoreItems: restoreResults,
  addItemHandler: addResultHandler,
  removeItemHandler: removeResultHandler,
} = UseSaveAndRestore("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/results.json", "gameId");

  useEffect(() => {
    restorePlayers("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/players.json", "players");
  }, [restorePlayers]);

  useEffect(() => {
    restoreDecks("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/decks.json", "decks");
  }, [restoreDecks]);

  useEffect(() => {
    restoreResults("https://magic-ranking-default-rtdb.europe-west1.firebasedatabase.app/results.json", "results");
  }, [restoreResults]);

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

  return <div><Suspense fallback={<div className="centered" id="loading">Loading...</div>}>{chooseContent()}</Suspense></div>;
}

export default Content;
