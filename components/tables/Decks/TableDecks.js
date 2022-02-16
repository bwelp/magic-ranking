import React from "react";

import DeckItem from "./DeckItem";

import "./TableDecks.css";

function TableDecks(props) {
  return (
    <div id="table_decks">
      {props.players.map((player) => (
        <div key={player.player}>
          <div className="table_decks__players">{player.player}</div>
          <div className="table_decks__decks">
            {props.decks.filter(deck => deck.player === player.player).map((deck) => (
              <DeckItem
                key={deck.deckname}
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
                onRemoveDeck={props.onRemoveDeck}
                onOpenStatistic={props.onOpenDeckStatistic}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableDecks;

    
