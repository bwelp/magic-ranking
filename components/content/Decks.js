import React, { useState } from "react";

import './Decks.css';

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";
import DeckStatistics from "../tables/Decks/DeckStatistics";

function Decks(props) {
  const [addDeckBoxActive, setAddDeckBoxActive] = useState(false);
  const [activeDeck, setActiveDeck] = useState("");
  const [deckData, setDeckData] = useState({});
  const [deckStatistic, setDeckStatistic] = useState({});
  const [diagramData, setDiagramData] = useState([]);

  const createDeckStatistic = (deckname) => {
    let numOfAllGames = props.results.length;
    let numOfGames = 0;
    let numOfPlace1 = 0;
    let numOfPlace2 = 0;
    let numOfPlace3 = 0;
    let numOfPlace4Plus = 0;
    for (let i = 0; i < props.results.length; i++) {
      if (props.results[i].decks[0] === deckname) {
        numOfPlace1++;
      }
      if (props.results[i].decks[1] === deckname) {
        numOfPlace2++;
      }
      if (props.results[i].decks[2] === deckname) {
        numOfPlace3++;
      }
      for (let j = 3; j < props.results[i].decks.length; j++) {
        if (props.results[i].decks[3] === deckname) {
          numOfPlace4Plus++;
        }
      }
      for (let j = 0; j < props.results[i].decks.length; j++) {
        if (props.results[i].decks[j] === deckname) {
          numOfGames++;
        }
      }
    }

    let winRate = 0;
    let winRateTotal = 0;

    if (numOfGames !== 0) {
      winRate = Math.round((numOfPlace1 / numOfGames) * 100);
      winRateTotal = Math.round((numOfPlace1 / numOfAllGames) * 100);
    }

    setDiagramData( [
      {label: "Platz 1", size: numOfPlace1, color: "#D4AF37"},
      {label: "Platz 2", size: numOfPlace2, color: "#D0D2D1"},
      {label: "Platz 3", size: numOfPlace3, color: "#BF8970"},
      {label: "Platz 4+", size: numOfPlace4Plus, color: "#F0F0F8"}
    ]);

    return {
      numberOfAllGames: numOfAllGames,
      numberOfGames: numOfGames,
      numberOfPlace1: numOfPlace1,
      winRate: winRate,
      winRateTotal: winRateTotal
    };
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
      setDeckData(props.decks.filter(deck => deck.deckname === deckname)[0]);
      setDeckStatistic(createDeckStatistic(deckname));
    }
  };

  const deckPlusButtonClickHandler = (event) => {
    setActiveDeck("");
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
          onRemoveDeck={props.onRemoveDeck}
          onOpenDeckStatistic={openDeckStatisticHandler}
        />
        <NewDeck
          onAddDeck={props.onAddDeck}
          players={props.players}
          decks={props.decks}
          addDeckActive={addDeckBoxActive}
          onStopAdding={stopAddingDeckHandler}
        />
        <DeckStatistics deck={deckData} activeDeck={activeDeck} deckStatistic={deckStatistic} diagramData={diagramData}/>
      </div>
    </div>
  );
}

export default Decks;
