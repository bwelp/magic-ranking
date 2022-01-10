import React from "react";

import DeckItem from "./DeckItem";

import "./TableDecks.css";

function TableDecks(props) {
  return (
    <div>
      <table id="decklist">
        <thead>
          <tr>
            <th>Deck</th>
            <th>Spieler</th>
            <th>Farben</th>
            <th>Commander</th>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDecks;
