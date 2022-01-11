import React, { useState, useEffect } from "react";

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";

function Decks(props) {
  const restoreDecks = () => {
    let savedDecks = localStorage.getItem("decks");
    if (savedDecks !== null && savedDecks !== []) {
      let restoredDecks = [];
      JSON.parse(savedDecks).forEach((deck) => {
        restoredDecks.push(deck);
      });
      return restoredDecks;
    } else {
      return [];
    }
  };

  const [decks, setDecks] = useState(() => {
    return restoreDecks();
  });

  const saveDecks = () => {
    localStorage.setItem("decks", JSON.stringify(decks));
  };

  function addDeckHandler(enteredDeckData) {
    setDecks(prevDecks => {
        return [...prevDecks, enteredDeckData]
    });
  };

  function removeDeckHandler(deckname) {
    setDecks(function(prevDecks) {
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
  };

  useEffect(() => {
      saveDecks();
      console.log(decks);
      props.onRelayDecks(decks);
  })

  return (
    <div>
      <NewDeck onAddDeck={addDeckHandler} items={props.items} />
      <TableDecks items={decks} onRemoveDeck={removeDeckHandler} />
    </div>
  );
}

export default Decks;
