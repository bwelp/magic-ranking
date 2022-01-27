import React, { useState, useEffect } from "react";

import './Decks.css';

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";
import DeckStatistics from "../tables/Decks/DeckStatistics";

function Decks(props) {
  const [addDeckBoxActive, setAddDeckBoxActive] = useState(false);
  const [activeDeck, setActiveDeck] = useState("");
  const [deckData, setDeckData] = useState({});

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

  const createDeckStatistic = (deckname) => {
    let deckStatistic = {};
    return deckStatistic;
  };

  console.log(props.results);

  const openDeckStatisticHandler = (deckname) => {
    if(deckname !== activeDeck){
    setActiveDeck(deckname);}
    else {
      setActiveDeck("");
    }
    if(deckname !== "") {
      setAddDeckBoxActive(false);
      setDeckData(decks.filter(deck => deck.deckname === deckname)[0]);
    }
    console.log(deckData);
    setDeckData(...deckData, createDeckStatistic(deckname));
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
    setActiveDeck("");
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
        <TableDecks
          decks={decks}
          players={props.players}
          onRemoveDeck={removeDeckHandler}
          onOpenDeckStatistic={openDeckStatisticHandler}
        />
        <NewDeck
          onAddDeck={addDeckHandler}
          players={props.players}
          addDeckActive={addDeckBoxActive}
          onStopAdding={stopAddingDeckHandler}
        />
        {activeDeck !== "" && <DeckStatistics deck={deckData} activeDeck={activeDeck} />}
      </div>
    </div>
  );
}

export default Decks;
