import React, { useState } from "react";

import DeckItem from "./DeckItem";
import DeckStatistics from "./DeckStatistics";

import "./TableDecks.css";

function TableDecks(props) {

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
    let countEval = 0;
    let minEval = 10;
    let maxEval = 0;
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
        if (props.results[i].decks[j] === deckname) {
          numOfPlace4Plus++;
        }
      }
      for (let j = 0; j < props.results[i].decks.length; j++) {
        if (props.results[i].decks[j] === deckname) {
          numOfGames++;
          if (props.results[i].deckEvalCheck === false) {
            countEval++;
            let evalX = props.results[i].deckEvals[j];
            if (evalX > maxEval) {
              maxEval = evalX;
            }
            if (evalX < minEval) {
              minEval = evalX;
            }
          }
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
      {label: "Platz 2", size: numOfPlace2, color: "#e1e1e1"},
      {label: "Platz 3", size: numOfPlace3, color: "#BF8970"},
      {label: "Platz 4+", size: numOfPlace4Plus, color: "#505050"}
    ]);

    return {
      numberOfAllGames: numOfAllGames,
      numberOfGames: numOfGames,
      numberOfPlace1: numOfPlace1,
      winRate: winRate,
      winRateTotal: winRateTotal,
      countEval,
      maxEval,
      minEval
    };
  };

  const openDeckStatisticHandler = (deckname) => {
    if(deckname !== activeDeck){
    setActiveDeck(deckname);}
    else {
      setActiveDeck("");
    }
    if(deckname !== "") {
      setDeckData(props.decks.filter(deck => deck.deckname === deckname)[0]);
      setDeckStatistic(createDeckStatistic(deckname));
    }
  };

  const calculateDeckPower = () => {
    if (props.decks.length > 0) {
      props.decks.forEach((deck) => {
        let power = 0;
        let count = 0;
        if (props.results.length > 0) {
          props.results.forEach((result) => {
            if (result.deckEvalCheck === false) {
              for (let i = 0; i < result.decks.length; i++) {
                if (deck.deckname === result.decks[i]) {
                  count++;
                  power += parseFloat(result.deckEvals[i]);
                  break;
                }
              }
            }
          });
        }
        if (count > 0) {
          deck.power = Math.round((power / count) * 10) / 10;
        } else {
          deck.power = "";
        }
      });
    }
  };

  calculateDeckPower();

  return (
    <div id="table_decks">
      {props.players.map((player) => (
        <div key={player.player}>
          <div className="table_decks__players">{player.player}</div>
          <div className="table_decks__decks">
            {props.decks
              .filter((deck) => deck.player === player.player)
              .map((deck) => (
                <div key={deck.deckname}>
                  <DeckItem
                    id={deck.id}
                    deckname={deck.deckname}
                    player={deck.player}
                    commander={deck.commander}
                    secondCommander={deck.secondCommander}
                    colorWhite={deck.colorWhite}
                    colorBlue={deck.colorBlue}
                    colorBlack={deck.colorBlack}
                    colorRed={deck.colorRed}
                    colorGreen={deck.colorGreen}
                    colorless={deck.colorless}
                    power={deck.power}
                    onRemoveDeck={props.onRemoveDeck}
                    onChangeDeck={props.onChangeDeck}
                    onOpenStatistic={openDeckStatisticHandler}
                  />
                  {deck.deckname === activeDeck && (
                    <DeckStatistics
                      deck={deckData}
                      activeDeck={activeDeck}
                      deckStatistic={deckStatistic}
                      diagramData={diagramData}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableDecks;

    
