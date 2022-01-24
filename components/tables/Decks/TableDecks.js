import React from "react";

import DeckItem from "./DeckItem";

import "./TableDecks.css";

function TableDecks(props) {
  const removeDeckHandler = (deckname) => {
    props.onRemoveDeck(deckname);
  };

  return (
    <div className="table_decks">
      <table id="decklist">
        <thead>
          <tr>
            <th>Deck</th>
            <th>Spieler</th>
            <th>Farben</th>
            <th>Commander</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((deck) => (
            <DeckItem
              key={deck.deckname}
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
              onRemoveDeck={removeDeckHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDecks;
