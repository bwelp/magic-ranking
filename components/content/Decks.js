import React, { useState, useEffect } from "react";

import './Decks.css';

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";

function Decks(props) {
  const [addDeckBoxActive, setAddDeckBoxActive] = useState(false);

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
    setDecks((prevDecks) => {
      return [...prevDecks, enteredDeckData];
    });
  }

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

  const deckPlusButtonClickHandler = (event) => {
    setAddDeckBoxActive(true);
  };

  const stopAddingDeckHandler = () => {
    setAddDeckBoxActive(false);
  };

  useEffect(() => {
    saveDecks();
    props.onRelayDecknames(decks);
  });

  return (
    <div>
      <div className="headline_container">
        <div className="headline">Decks </div>
        {!addDeckBoxActive && (
          <button
            type="button"
            id="deck_plus_button"
            onClick={deckPlusButtonClickHandler}
          >
            +
          </button>
        )}
      </div>
      <div id="deck_container">
        <TableDecks items={decks} onRemoveDeck={removeDeckHandler} />
        <NewDeck
          onAddDeck={addDeckHandler}
          items={props.items}
          addDeckActive={addDeckBoxActive}
          onStopAdding={stopAddingDeckHandler}
        />
      </div>
    </div>
  );
}

export default Decks;
