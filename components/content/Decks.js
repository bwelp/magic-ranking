import React, { useState, useEffect } from "react";

import NewDeck from "../forms/NewDeck/NewDeck";
import TableDecks from "../tables/Decks/TableDecks";

function Deck(props) {
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
    setDecks(prevDecks => {
        return [...prevDecks, enteredDeckData]
    });
  };

//   function removePlayerHandler(playerName) {
//     console.log(players);
//     setPlayers(function(prevPlayers) {
//       console.log(prevPlayers);
//       let index = -1;
//       for (let i = 0; i < prevPlayers.length; i++) {
//         if (prevPlayers[i].player === playerName) {
//           index = i;
//           break;
//         }
//       }

//       if (index !== -1) {
//         prevPlayers.splice(index, 1);
//       }
//       return [...prevPlayers];
//     });
//   };
  useEffect(() => {
      saveDecks();
      console.log(decks);
  })

  return (
    <div>
      <NewDeck onAddDeck={addDeckHandler} items={props.items}/>
      <TableDecks items={decks} />
    </div>
  );
}

export default Deck;
