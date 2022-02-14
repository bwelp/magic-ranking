import React, { useState, useEffect } from "react";

import "./Content.css";
import Players from "./content/Players";
import Decks from "./content/Decks";
import Results from "./content/Results";
import Ranking from "./content/Ranking";

function Content(props) {
  const restoreItems = (localStorageItem) => {
    let savedItems = localStorage.getItem(localStorageItem);
    if (savedItems !== null && savedItems !== []) {
      let restoredItems = [];
      JSON.parse(savedItems).forEach((item) => {
        restoredItems.push(item);
      });
      return restoredItems;
    } 
    else {
      return [];
    }
  };

  const [players, setPlayers] = useState(() => {
    return restoreItems("players");
  });
  const [decks, setDecks] = useState(() => {
    return restoreItems("decks");
  });
  const [results, setResults] = useState(() => {
    return restoreItems("results");
  });

  // Players

  function addPlayerHandler(player) {
    setPlayers(function(prevPlayers) {
      return [...prevPlayers, player].sort((a, b) => {
        if (a.player < b.player) {
          return -1;
        }
        if (a.player > b.player) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  };

  function removePlayerHandler(playerName) {
    console.log(players);
    setPlayers(function(prevPlayers) {
      console.log(prevPlayers);
      let index = -1;
      for (let i = 0; i < prevPlayers.length; i++) {
        if (prevPlayers[i].player === playerName) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        prevPlayers.splice(index, 1);
      }
      return [...prevPlayers];
    });
  };

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  
  // Decks

  function addDeckHandler(enteredDeckData) {
    setDecks((prevDecks) => {
      return [...prevDecks, enteredDeckData].sort((a, b) => {
        if (a.deckname < b.deckname) {
          return -1;
        }
        if (a.deckname > b.deckname) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  };

  function removeDeckHandler(deckname) {
    setDecks(function (prevDecks) {
      let index = -1;
      for (let i = 0; i < prevDecks.length; i++) {
        if (prevDecks[i].deckname === deckname) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        prevDecks.splice(index, 1);
      }
      return [...prevDecks];
    });
  }

  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks));
  }, [decks]);


  // Results

  function addResultHandler(enteredResultData) {
    setResults(prevResults => {
      return [...prevResults, enteredResultData].sort((a, b) => {
        if (a.gameId < b.gameId) {
          return -1;
        }
        if (a.gameId > b.gameId) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  };

  function removeResultHandler(gameId) {
    setResults(function(prevResults) {
      let index = -1;
      for (let i = 0; i < prevResults.length; i++) {
        if (prevResults[i].gameId === gameId) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        prevResults.splice(index, 1);
      }
      return [...prevResults];
    });
  };

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
