import React, { useState } from "react";

import './Decks.css';

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";

function Decks(props) {
  const [addDeckBoxActive, setAddDeckBoxActive] = useState(false);

  const deckPlusButtonClickHandler = (event) => {
    setAddDeckBoxActive(true);
  };

  const stopAddingDeckHandler = () => {
    setAddDeckBoxActive(false);
  };

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
        <TableDecks
          decks={props.decks}
          players={props.players}
          results={props.results}
          onRemoveDeck={props.onRemoveDeck}
        />
        <NewDeck
          onAddDeck={props.onAddDeck}
          players={props.players}
          decks={props.decks}
          addDeckActive={addDeckBoxActive}
          onStopAdding={stopAddingDeckHandler}
        />
      </div>
    </div>
  );
}

export default Decks;
