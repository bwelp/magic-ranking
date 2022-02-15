import React, { useState } from "react";

import "./Players.css";

import NewPlayer from "../forms/NewPlayer/NewPlayer";
import TablePlayers from "../tables/Players/TablePlayers";
import PlayerStatistic from "../tables/Players/PlayerStatistic";

function Players(props) {
  const [addPlayerBoxActive, setAddPlayerBoxActive] = useState(false);
  const [activePlayer, setActivePlayer] = useState("");
  const [playerStatistic, setPlayerStatistic] = useState({});
  const [playerDiagramData, setPlayerDiagramData] = useState([]);

  const compareArray = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };

  const createPlayerStatistic = (player) => {
    let numberOfGames = 0;
    let numberOfPlace1 = 0;
    let numberOfPlace2 = 0;
    let numberOfPlace3 = 0;
    let numberOfPlace4Plus = 0;
    let winRate = 0;
    let winnerDeckArray = [];
    let bestDeck = "";
    let bestDeckNumberOfWins = 0;
    let bestDeckColorWhite = false;
    let bestDeckColorBlue = false;
    let bestDeckColorBlack = false;
    let bestDeckColorRed = false;
    let bestDeckColorGreen = false;
    let bestDeckColorless = false;

    for (let i = 0; i < props.results.length; i++) {
      if (props.results[i].players[0] === player) {
        numberOfPlace1++;
        winnerDeckArray.push(props.results[i].decks[0]);
      }
      if (props.results[i].players[1] === player) {
        numberOfPlace2++;
      }
      if (props.results[i].players[2] === player) {
        numberOfPlace3++;
      }
      for (let j = 3; j < props.results[i].players.length; j++) {
        if (props.results[i].players[j] === player) {
          numberOfPlace4Plus++;
        }
      }
      for (let j = 0; j < props.results[i].players.length; j++) {
        if (props.results[i].players[j] === player) {
          numberOfGames++;
        }
      }
    }

    // WinRate

    if (numberOfGames !== 0) {
      winRate = Math.round((numberOfPlace1 / numberOfGames) * 100);
    }

    // Bestes Deck

    if (winnerDeckArray.length === 1) {
      bestDeck = winnerDeckArray[0];
      bestDeckNumberOfWins = 1;
    }

    if (winnerDeckArray.length > 1) {
      winnerDeckArray.sort(compareArray);

      let numberOfDeckWins = [];
      numberOfDeckWins.push({ deckname: winnerDeckArray[0], count: 1 });
      for (let i = 1; i < winnerDeckArray.length; i++) {
        if (winnerDeckArray[i] === winnerDeckArray[i - 1]) {
          numberOfDeckWins[numberOfDeckWins.length - 1].count++;
        } else {
          numberOfDeckWins.push({ deckname: winnerDeckArray[i], count: 1 });
        }
      }

      numberOfDeckWins.sort((a, b) => {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        } else {
          return 0;
        }
      });

      bestDeck = numberOfDeckWins[0].deckname;
      bestDeckNumberOfWins = numberOfDeckWins[0].count;
    }

    if (bestDeck !== "") {
      bestDeckColorWhite = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorWhite;
      bestDeckColorBlue = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorBlue;
      bestDeckColorBlack = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorBlack;
      bestDeckColorRed = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorRed;
      bestDeckColorGreen = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorGreen;
      bestDeckColorless = props.decks.find(
        (deck) => deck.deckname === bestDeck
      ).colorless;
    }

    // Platzierungs-Diagramm

    setPlayerDiagramData( [
      {label: "Platz 1", size: numberOfPlace1, color: "#D4AF37"},
      {label: "Platz 2", size: numberOfPlace2, color: "#D0D2D1"},
      {label: "Platz 3", size: numberOfPlace3, color: "#BF8970"},
      {label: "Platz 4+", size: numberOfPlace4Plus, color: "#F0F0F8"}
    ]);

    return {
      numberOfGames,
      numberOfPlace1,
      winRate,
      bestDeck,
      bestDeckNumberOfWins,
      bestDeckColorWhite,
      bestDeckColorBlue,
      bestDeckColorBlack,
      bestDeckColorRed,
      bestDeckColorGreen,
      bestDeckColorless,
    };
  };

  const playerPlusButtonClickHandler = (event) => {
    setActivePlayer("");
    setAddPlayerBoxActive(true);
  };

  const stopAddingPlayerHandler = () => {
    setAddPlayerBoxActive(false);
  };

  const openPlayerStatisticHandler = (player) => {
    if (player !== activePlayer) {
      setActivePlayer(player);
    } else {
      setActivePlayer("");
    }
    if (player !== "") {
      setAddPlayerBoxActive(false);
      setPlayerStatistic(createPlayerStatistic(player));
    }
  };

  return (
    <div>
      <div className="headline_container">
        <div className="headline">Spieler </div>
        {!addPlayerBoxActive && (
          <button
            type="button"
            id="player_plus_button"
            onClick={playerPlusButtonClickHandler}
          >
            +
          </button>
        )}
      </div>
      <div id="player_container">
        <TablePlayers
          players={props.players}
          onRemovePlayer={props.onRemovePlayer}
          onOpenPlayerStatistic={openPlayerStatisticHandler}
        />
        <NewPlayer
          players={props.players}
          onAddPlayer={props.onAddPlayer}
          addPlayerActive={addPlayerBoxActive}
          onStopAdding={stopAddingPlayerHandler}
        />
        <PlayerStatistic
          activePlayer={activePlayer}
          playerStatistic={playerStatistic}
          playerDiagramData={playerDiagramData}
        />
      </div>
    </div>
  );
}

export default Players;
