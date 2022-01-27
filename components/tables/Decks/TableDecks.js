import React from "react";

import DeckItem from "./DeckItem";

import "./TableDecks.css";

function TableDecks(props) {
  const removeDeckHandler = (deckname) => {
    props.onRemoveDeck(deckname);
  }; 

  // const openStatisticHandler = (deckname) => {
  //   console.log(deckname);
  // }

  // <div className="table_decks">
  //       <table id="decklist">
  //         <thead>
  //           <tr>
  //             <th>Deck</th>
  //             <th>Spieler</th>
  //             <th>Farben</th>
  //             <th>Commander</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {props.items.map((deck) => (
  //             <DeckItem
  //               key={deck.deckname}
  //               deckname={deck.deckname}
  //               player={deck.player}
  //               commander={deck.commander}
  //               secondCommander={deck.secondCommander}
  //               colorWhite={deck.colorWhite}
  //               colorBlue={deck.colorBlue}
  //               colorBlack={deck.colorBlack}
  //               colorRed={deck.colorRed}
  //               colorGreen={deck.colorGreen}
  //               colorless={deck.colorless}
  //               onRemoveDeck={removeDeckHandler}
  //             />
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>

  return (
    <div id="table_decks">
      {props.players.map((player) => (
        <div key={player}>
          <div className="table_decks__players">{player}</div>
          <div className="table_decks__decks">
            {props.decks.filter(deck => deck.player === player).map((deck) => (
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

    
